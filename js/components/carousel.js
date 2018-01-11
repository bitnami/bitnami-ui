// Utils
import b from '../base';
import { touchDevice } from '../utils/mobile';

// Hammer for touch capabilities
import Hammer from 'hammerjs';

/**
 * Initialize the Header component. It listen to open/close events for responsive
 * and accesibility requirements
 */
const carousel = () => {
  /**
   * Build the button control to change the slide
   *
   * @param {integer} index Index of the button
   * @param {integer} total Number of slides in the carousel
   * @param {boolean} active Set if the element is active
   * @return {string} HTML code of the button
   */
  const buildButton = (index, total, active = false) => {
    const activeClass = active ? 'carousel__controls__button-active' : '';
    const label = `Go to slide ${index + 1} of ${total}`;
    return `<li>
      <button class="carousel__controls__button ${activeClass}" aria-label="${label}">
        <div class="carousel__controls__button__inner"></div>
      </button>
    </li>`;
  };

  /**
   * Build controls for a given carousel
   *
   * @param {UINode} carousel Carousel node
   */
  const buildControls = (carousel) => {
    const slidesCount = carousel.tree.find('.carousel__slides__slide').length;
    let controls = '';

    for(let i = 0; i < slidesCount; i++) {
      controls += buildButton(i, slidesCount, i === 0);
    }

    carousel.tree.find('.carousel__controls').html.replace(controls);
  };

  /**
   * Change the current slide to a specific one
   *
   * @param {UINode} carousel Main container of the carousel
   * @param {UINode} slides Container node of the slides
   * @param {number} slideNumber The number of the slide to change
   */
  const changeSlide = (carousel, slides, slideNumber) => {
    const slidesCount = slides.length;

    // Avoid go out of the scope
    if (slideNumber > slidesCount - 1 || slideNumber < 0) return;

    slides.css.style({ transform: `translateX(${-100 * slideNumber}%)`});
    carousel.tree.find('.carousel__controls__button-active').css.remove('carousel__controls__button-active');
    carousel.tree.find('.carousel__controls__button')[slideNumber].css.add('carousel__controls__button-active');

    // Update aria!
    slides.tree.find('.carousel__slides__slide[aria-hidden="false"]').aria.show(false);
    slides.tree.children()[slideNumber].aria.show();
  }

  // Add event listeners and build controls
  b('.carousel').forEach((carousel) => {
    // Current element
    let active = 0;

    // Selectors
    const touch = carousel.tree.find('.carousel__touch');
    const slides = carousel.tree.find('.carousel__slides');

    // TODO: Move this to the lib.
    const slidesWidth = slides.node.offsetWidth;
    const slidesCount = slides.tree.children().length;
    // Select the previous anchor
    buildControls(carousel);

    // Initialize the aria-hidden attribute of slides
    carousel.tree.find('.carousel__slides__slide').forEach((slide, i) => {
      slide.aria.show(active === i);
    });

    // Add listeners to the controls
    carousel.tree.find('.carousel__controls__button').forEach((button, i) => {
      button.events.on('click', (e) => {
        active = i;
        changeSlide(carousel, slides, i);
      });
    });

    // Add touchable capabilities
    const hammer = new Hammer(touch.node, {
      dragLockToAxis: true,
      dragBlockHorizontal: true
    });

    // Receive touch changes
    hammer.on('hammer.input', (e) => {
      const movement = (e.deltaX / slidesWidth) * 100;
      const percent = -100 * active + movement;

      if (e.isFinal && movement > 20 && active !== 0) {
        active -= 1;
        changeSlide(carousel, slides, active);
      } else if (e.isFinal && movement < -20 && active !== slidesCount - 1) {
        active += 1
        changeSlide(carousel, slides, active);
      } else if (e.isFinal) {
        changeSlide(carousel, slides, active);
      } else if (movement > 1 || movement < -1) {
        slides.css.style({ transition: 'none', transform: `translateX(${percent}%)` });
      }
    });
  });
}

export default carousel;
