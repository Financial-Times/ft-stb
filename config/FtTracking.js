export default function FtTracking() {
  // oTracking
  var oTracking = Origami['o-tracking'];
  var parent = document.querySelector('meta[name="parent"]');

  var config_data = {
    server: 'https://spoor-api.ft.com/px.gif',
    context: {
      product: 'paid-post',
      content: {
        title: document.querySelector('title').textContent,
        parent: parent ? parent.getAttribute('content') : null,
      },
    },
    user: {
      ft_session: oTracking.utils.getValueFromCookie(/FTSession=([^;]+)/),
    },
  };
  // Setup
  oTracking.init(config_data);
  // Page
  oTracking.page({
    content: {
      asset_type: 'page',
    },
  });

  if (!oTracking.initialised) {
    // Automatically track clicks
    oTracking.click.init('button');
  }
}
