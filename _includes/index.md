[freaq](http://www.github.com/zzmp/freaq) is an audio visualizer [bookmarklet](http://marklets.com/FAQ.aspx) for youtube.

---

<img src="https://raw.githubusercontent.com/zzmp/freaq/gh-pages/images/logo.png">

### freaq out

1. **Get it** by dragging it to your bookmarks bar.

 <a class="bookmarklet" href="javascript:(function(){var fqbm=document.createElement('script');fqbm.setAttribute('type','text/javascript');fqbm.setAttribute('src','https://raw.githubusercontent.com/zzmp/freaq/gh-pages/freaq.min.js');document.querySelector('body').appendChild(fqbm);}())">
  freaq
 </a>

2. **Navigate to youtube** - bring up your favorite vid.

3. **Click it** to freaq out.

<iframe src="http://ghbtns.com/github-btn.html?user=zzmp&amp;repo=freaq&amp;type=watch&amp;count=true&amp;size=large"
 allowtransparency="true" frameborder="0" scrolling="0" width="170" height="30"></iframe><br/>

## What does it do?

freaq analyses HTML5 enabled audio, taking advantage of new technologies to enhance those videos that you just pick for the song.

## How does it do it?

* freaq works through HTML5 video and the JavaScript Web Audio API, both available on modern browsers.

* freaq uses a minimalist model-view framework driven by the [**pown**](http://www.npmjs.org/package/pown) eventing system.

* freaq visualizes through a `<canvas>`, but will eventually migrate to `<svg>` to mitigate binning.

* freaq is open-sourced: fork it to help out!

## Wait - what's a bookmarklet?

A bookmarklet is a small piece of javascript you can drag to your bookmarks bar. You can click it like any other bookmark to enhance another site: in this case, youtube.

---

freaq will eventually expand to other audio sites/APIs, and fork off a minimalist visualization library.

___

### Created by Zach Pomerantz


* github: [@zzmp](http://www.github.com/zzmp)

* blog: [garabagne.io](http://www.garabagne.io)

___

This site was made using [Solo](http://chibicode.github.io/solo/).

<!-- Fork me on GitHub -->
<div class="github-fork-ribbon-wrapper right fixed" style="width: 150px;height: 150px;position: fixed;overflow: hidden;top: 0;z-index: 9999;pointer-events: none;right: 0;"><div class="github-fork-ribbon" style="position: absolute;padding: 2px 0;background-color: #333;background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));-webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.5);-moz-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.5);box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.5);z-index: 9999;pointer-events: auto;top: 42px;right: -43px;-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);transform: rotate(45deg);"><a href="https://github.com/zzmp/freaq" style="font: 700 13px &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;color: #fff;text-decoration: none;text-shadow: 0 -1px rgba(0, 0, 0, 0.5);text-align: center;width: 200px;line-height: 20px;display: inline-block;padding: 2px 0;border-width: 1px 0;border-style: dotted;border-color: rgba(255, 255, 255, 0.7);">Fork me on GitHub</a></div></div>

<!-- Google analytics -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-50937918-1', 'freaq.io');
  ga('send', 'pageview');
</script>
