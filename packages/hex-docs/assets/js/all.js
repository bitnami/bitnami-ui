// Selection cursors
const saveCursor = (containerEl) => {
  var range = window.getSelection().getRangeAt(0);
  var preSelectionRange = range.cloneRange();
  preSelectionRange.selectNodeContents(containerEl);
  preSelectionRange.setEnd(range.startContainer, range.startOffset);
  var start = preSelectionRange.toString().length;

  return {
      start: start,
      end: start + range.toString().length
  };
};

const restoreCursor = (containerEl, savedSel) => {
  var charIndex = 0, range = document.createRange();
  range.setStart(containerEl, 0);
  range.collapse(true);
  var nodeStack = [containerEl], node, foundStart = false, stop = false;

  while (!stop && (node = nodeStack.pop())) {
      if (node.nodeType == 3) {
          var nextCharIndex = charIndex + node.length;
          if (!foundStart && savedSel.start >= charIndex && savedSel.start <= nextCharIndex) {
              range.setStart(node, savedSel.start - charIndex);
              foundStart = true;
          }
          if (foundStart && savedSel.end >= charIndex && savedSel.end <= nextCharIndex) {
              range.setEnd(node, savedSel.end - charIndex);
              stop = true;
          }
          charIndex = nextCharIndex;
      } else {
          var i = node.childNodes.length;
          while (i--) {
              nodeStack.push(node.childNodes[i]);
          }
      }
  }

  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

// Make code editable
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.Component__Content > pre').forEach((n) => {
    n.contentEditable = "true";
    n.addEventListener('input', (e) => {
      const target = e.target;
      const value = target.innerText;
      // Save cursor
      const cursor = saveCursor(target);

      // Remove div on insertParagraph
      if (e.inputType === 'insertParagraph') {
        target.querySelector('div').remove();
        // Increase the cursor position:
        cursor.start += 1;
        cursor.end += 1;
      }

      // highlight
      const result = Prism.highlight(value, Prism.languages.html);

      // Inject
      target.previousElementSibling.innerHTML = value;
      target.firstChild.innerHTML = result;
      // Restore the cursor
      restoreCursor(target, cursor);
    });
  });

  // Get the current release
  if (b('.currentVersion').length > 0) {
    fetch('https://api.github.com/repos/bitnami/hex/releases/latest')
      .then((res) => res.json())
      .then((data) => {
        b('.currentVersion').html.replace(data.tag_name);
      });
  }
});
