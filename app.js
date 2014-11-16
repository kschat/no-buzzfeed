!function($, toArray, MutationObserver, config, undefined) {
  'use strict';

  var log = config.log ? console.log.bind(console) : function() {}
    , potentialBuzzFeed = $(config.flags)
    , observables = $(config.feedSelectors)
    , matcher = config.keyMatcher
    , ContainerMatcher = config.postMatcher
    , removePosts = function(elms) {
        elms = !Array.isArray(elms) ? toArray(elms) : elms;

        elms
          .filter(function(a) { return matcher.test(a.outerHTML); })
          .map(function(e) {
            var node = e.parentNode;
            
            while(node && !ContainerMatcher.test(node.outerHTML)) {
               node = node.parentNode;
            }

            log('removing node: %s', node.id || node.className);

            return node && node.remove();
          });
      }
    , postObserver = new MutationObserver(function(muts) {
        log('Mutation trigged; %d mutations', muts.length);
        muts.map(function(m) { return removePosts(m.addedNodes); });
      });


  toArray(observables).forEach(function(i) {
    log('observing element: %s', i.id || i.className);
    postObserver.observe(i, { childList: true, subtree:true });
  });

  log('removing initial posts');
  removePosts(potentialBuzzFeed);
}(
  document.querySelectorAll.bind(document), 
  [].slice.call.bind([].slice), 
  window.MutationObserver || window.WebKitMutationObserver,
  {
    keyMatcher: /buzzfeed/i,
    flags: '._52c6, ._4ysy .fsm.fwn.fcg',
    feedSelectors: '.fbTimelineCapsule, [id^="PagePostsSectionPagelet-"], [id^="feed_stream_"]',
    postMatcher: /substream_|tl_unit_|timelineUnitContainer/i,
    log: false
  }
);
