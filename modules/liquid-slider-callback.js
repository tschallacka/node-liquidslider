animationCallback:function(g){var f=this;if(!f.dontCallback||g){setTimeout(function(){f.options.callbackFunction.call(this)},f.options.slideEaseDuration+50)}},animationCallForward:function(g){var f=this;if(!f.dontCallback||g){f.options.callforwardFunction.call(this)}},