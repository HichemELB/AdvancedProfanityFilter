export default class WebAudioSites {
  static combineSites(sites: { [site: string]: AudioRule[] } = {}): { [site: string]: AudioRule[] } {
    return Object.assign({}, WebAudioSites.sites, sites);
  }

  static sites: { [site: string]: AudioRule[] } = {
    'abc.com': [{ mode: 'element', className: 'akamai-caption-text', tagName: 'DIV' }],
    'www.amazon.com': [
      {
        mode: 'watcher',
        displayHide: 'none',
        displaySelector: 'div.webPlayerContainer div.f35bt6a',
        displayShow: '',
        iframe: false,
        parentSelector: 'div.webPlayerContainer div p > span',
        subtitleSelector: 'div.webPlayerContainer div span > span',
        videoSelector: 'div.webPlayerElement video[src]'
      }
    ],
    'www.amc.com': [
      { mode: 'element', className: 'ttr-container', subtitleSelector: 'span.ttr-cue', tagName: 'DIV' },
      { mode: 'cue', videoCueLanguage: 'en', videoSelector: 'video' }
    ],
    'tv.apple.com': [
      {
        mode: 'elementChild',
        displaySelector: 'div.video-container > div > div > div',
        parentSelector: 'div.video-container',
        preserveWhiteSpace: true,
        rootNode: true,
        subtitleSelector: 'div > div > div > div > div',
        tagName: 'DIV'
      }
    ],
    'www.att.tv': [{ mode: 'cue', videoSelector: 'video#quickplayPlayer' }],
    'www.attwatchtv.com': [{ mode: 'cue', videoSelector: 'video#quickplayPlayer' }],
    'gem.cbc.ca': [{ className: 'jw-text-track-container', mode: 'element', subtitleSelector: 'div.jw-text-track-cue', tagName: 'DIV' }],
    'www.cbs.com': [{ mode: 'cue', videoCueLanguage: 'en', videoCueRequireShowing: false }],
    'www.crackle.com': [{ mode: 'elementChild', ignoreMutations: true, parentSelector: 'div.clpp-subtitles-container', simpleUnmute: true, tagName: '#text' }],
    'www.criterionchannel.com': [{ mode: 'cue', videoCueHideCues: true, videoCueRequireShowing: false, iframe: true }],
    'www.cwtv.com': [{ className: 'ttr-container', mode: 'element', subtitleSelector: 'span.ttr-cue', tagName: 'DIV' }],
    'www.dishanywhere.com': [
      { mode: 'element', className: 'bmpui-ui-subtitle-label', tagName: 'SPAN' },
      { mode: 'element', className: 'bmpui-subtitle-region-container', subtitleSelector: 'div.bmpui-container-wrapper > span.bmpui-ui-subtitle-label', tagName: 'div' }
    ],
    'www.disneyplus.com': [{ mode: 'cue', videoSelector: 'video.btm-media-client-element' }],
    'www.fox.com': [{ mode: 'element', className: 'jw-text-track-container', subtitleSelector: 'div.jw-text-track-cue', tagName: 'DIV' }],
    'www.funimation.com': [
      {
        mode: 'elementChild',
        iframe: true,
        parentSelector: 'div.vjs-text-track-display',
        simpleUnmute: true,
        subtitleSelector: ':scope div > div',
        tagName: 'DIV',
      }
    ],
    'play.google.com': [{ mode: 'element', className: 'lava-timed-text-window', subtitleSelector: 'span.lava-timed-text-caption', tagName: 'DIV' }],
    'play.hbomax.com': [{ mode: 'elementChild', parentSelectorAll: 'div.class3 > span, div.class28 > span', showSubtitles: 0, tagName: 'SPAN' }],
    'www.hulu.com': [{ mode: 'element', className: 'caption-text-box', displaySelector: 'div.caption-text-box', subtitleSelector: 'p', tagName: 'DIV' }],
    'www.nbc.com': [
      { mode: 'element', className: 'ttr-line', subtitleSelector: 'span.ttr-cue', tagName: 'DIV' },
      { mode: 'cue', videoCueLanguage: 'en' }
    ],
    'www.netflix.com': [{ mode: 'element', className: 'player-timedtext-text-container', subtitleSelector: 'span', tagName: 'DIV' }],
    'www.peacocktv.com': [{ mode: 'elementChild', parentSelector: 'div.video-player__subtitles > div', subtitleSelector: 'SPAN > SPAN', tagName: 'div' }],
    'www.philo.com': [{ mode: 'cue' }],
    'app.plex.tv': [
      { mode: 'element', dataPropPresent: 'dialogueId', subtitleSelector: 'span > span', tagName: 'DIV' },
      { mode: 'element', containsSelector: 'div[data-dialogue-id]', subtitleSelector: 'span > span', tagName: 'DIV' }
    ],
    'watch.redeemtv.com': [{ mode: 'elementChild', convertBreaks: true, displaySelector: 'div.vp-captions', parentSelector: 'div.vp-captions', tagName: 'SPAN' }],
    'play.stan.com.au': [{ mode: 'elementChild', ignoreMutations: true, parentSelector: 'div.clpp-subtitles-container', simpleUnmute: true, tagName: '#text' }],
    'www.starz.com': [{ mode: 'elementChild', parentSelector: 'starz-captions > div.cue-list', tagName: 'SPAN' }],
    'www.syfy.com': [{ mode: 'element', className: 'ttr-line', subtitleSelector: 'span.ttr-cue', tagName: 'DIV' }],
    'www.tntdrama.com': [{ mode: 'cue', videoCueLanguage: 'en', videoSelector: 'video.top-media-element' }],
    'tubitv.com': [{ mode: 'elementChild', parentSelector: 'div#captionsComponent', tagName: 'SPAN' }],
    'www.universalkids.com': [{ mode: 'element', subtitleSelector: 'div.gwt-HTML', tagName: 'DIV' }],
    'www.usanetwork.com': [{ mode: 'element', className: 'ttr-line', subtitleSelector: 'span.ttr-cue', tagName: 'DIV' }],
    'www.vudu.com': [{ mode: 'element', subtitleSelector: 'span.subtitles', tagName: 'DIV' }],
    'tv.youtube.com': [{ mode: 'element', className: 'caption-window', subtitleSelector: 'span.ytp-caption-segment', tagName: 'DIV' }],
    'www.youtube.com': [{ mode: 'element', className: 'caption-window', subtitleSelector: 'span.ytp-caption-segment', tagName: 'DIV' }],
  };
}
