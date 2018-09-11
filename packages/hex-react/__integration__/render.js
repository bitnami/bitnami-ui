describe('Renders correctly', () => {
  it('renders on different browsers', async () => {
    await browser.url('http://127.0.0.1:9000');
    await browser.pause(1000);
    const text = await browser.getText('#title');

    expect(text).toBe('HEx');
  });
});
