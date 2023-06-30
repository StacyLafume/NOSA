import React from 'react'
import parse from 'html-react-parser';
// import "style/css/bootstrap.min.css"
// import "../missio-html/template/missio/style/css/plugins.css"
import "../missio-html/template/missio/style/revolution/css/settings.css"
import "../missio-html/template/missio/style.css"
import "../missio-html/template/missio/style/images/art/about4.jpg"

const html =`
  <div class="content-wrapper">
    <div class="rev_slider_wrapper fullscreen-container">
      <div id="slider2" class="rev_slider fullscreenbanner dark-wrapper" data-version="5.4.8">
        <ul>
          <li data-index="rs-26" data-transition="fade">
            <img src="../missio-html/template/missio/style/images/dummy.png" alt="" />
            <div class="tp-caption   tp-resizeme fullscreenvideo rs-parallaxlevel-3 tp-videolayer" id="slide-26-layer-3" data-x="0" data-y="0" data-whitespace="nowrap" data-type="video" data-responsive_offset="on" data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"nothing"}]'
              data-ytid="L3V7LKYPIUQ" data-videoattributes="version=3&enablejsapi=1&html5=1&hd=1&wmode=opaque&showinfo=0&rel=0" data-videorate="1" data-videowidth="100%" data-videoheight="100%" data-videocontrols="none" data-videoinline="true"
              data-videoloop="none" data-forceCover="1" data-aspectratio="16:9" data-textAlign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"
              data-autoplay="off" data-nextslideatend="true" data-videoposter="https://img.youtube.com/vi/L3V7LKYPIUQ/maxresdefault.jpg" data-noposteronmobile="on" data-volume="100" data-allowfullscreenvideo="true" style="z-index: 5;"> </div>
            <div class="tp-caption tp-shape tp-shapewrapper   tp-resizeme" id="slide-26-layer-5" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']"
              data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="on" data-frames='[{"delay":0,"speed":1500,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","ease":"nothing"}]'
              data-textAlign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-lasttriggerstate="reset" style="z-index: 6;background-color:rgba(0,0,0,0.4);">
            </div>
            <div class="tp-caption font-weight-700 text-uppercase color-white text-center" id="slide-26-layer-1" data-x="center" data-y="middle" data-voffset="['-80','-80','-80','-60']" data-fontsize="['18','18','18','18']" data-lineheight="['28','28','28','28']"
              data-width="['600','600','600','600']" data-textAlign="['center','center','center','center']" data-whitespace="['normal','normal','normal','normal']" data-frames='[{"delay":500,"speed":2000,"frame":"0","from":"sX:0.9;sY:0.9;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","to":"sX:0.9;sY:0.9;opacity:0;fb:20px;","ease":"Power3.easeInOut"}]'
              data-responsive="on" data-responsive_offset="on" style="z-index: 9; letter-spacing: 3px;">Travel Videographer</div>
            <div class="tp-caption font-weight-700 color-white text-uppercase text-center" id="slide-26-layer-2" data-x="center" data-y="middle" data-voffset="['0','0','0','0']" data-fontsize="['55','55','55','35']" data-lineheight="['65','65','65','45']"
              data-width="['900','900','900','900']" data-textAlign="['center','center','center','center']" data-whitespace="['normal','normal','normal','normal']" data-frames='[{"delay":500,"speed":2000,"frame":"0","from":"sX:0.9;sY:0.9;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","to":"sX:0.9;sY:0.9;opacity:0;fb:20px;","ease":"Power3.easeInOut"}]'
              data-responsive="on" data-responsive_offset="on" style="z-index: 9; letter-spacing: 1px;">I'm Jonathan Missio</div>
            <a class="tp-caption btn btn-l btn-white btn-icon-left" id="slide-26-layer-4" data-x="center" data-y="middle" data-voffset="['100','100','100','80']" data-width="['auto','auto','auto','auto']" data-textAlign="['center','center','center','center']"
              data-actions='[{"event":"click","action":"playvideo","layer":"slide-26-layer-3","delay":"1000"},{"event":"click","action":"togglelayer","layerstatus":"visible","layer":"slide-26-layer-5","delay":"0"},{"event":"click","action":"stoplayer","layer":"slide-26-layer-1","delay":"0"},{"event":"click","action":"stoplayer","layer":"slide-26-layer-2","delay":"0"},{"event":"click","action":"stoplayer","layer":"slide-26-layer-4","delay":"0"},{"event":"click","action":"startlayer","layer":"slide-26-layer-6","delay":"0"}]'
              data-frames='[{"delay":500,"speed":2000,"frame":"0","from":"sX:0.9;sY:0.9;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","to":"sX:0.9;sY:0.9;opacity:0;fb:20px;","ease":"Power3.easeInOut"}]'
              data-responsive="on" data-responsive_offset="on" style="z-index: 9;" href="#"><i class="fa fa-play"></i> Play Video</a>
            <div class="tp-caption video-control" id="slide-26-layer-6" data-x="['right','right','right','right']" data-hoffset="['20','20','20','20']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['20','20','20','20']" data-width="42"
              data-height="42" data-whitespace="nowrap" data-visibility="['on','on','off','off']" data-type="button" data-actions='[{"event":"click","action":"stopvideo","layer":"slide-26-layer-3","delay":"0"},{"event":"click","action":"stoplayer","layer":"slide-26-layer-6","delay":"0"},{"event":"click","action":"startlayer","layer":"slide-26-layer-5","delay":"0"},{"event":"click","action":"startlayer","layer":"slide-26-layer-1","delay":"0"},{"event":"click","action":"startlayer","layer":"slide-26-layer-2","delay":"0"},{"event":"click","action":"startlayer","layer":"slide-26-layer-4","delay":"0"}]'
              data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames='[{"delay":"bytrigger","speed":1500,"frame":"0","from":"sX:0.9;sY:0.9;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","to":"sX:0.9;sY:0.9;opacity:0;fb:20px;","ease":"Power3.easeInOut"}]'
              data-textAlign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-lasttriggerstate="reset" style="z-index: 8;"><i class="fa fa-pause"></i>
            </div>
          </li>
        </ul>
        <div class="tp-bannertimer tp-bottom"></div>
      </div>
      <!-- /.rev_slider -->
    </div>
    <!-- /.rev_slider_wrapper -->
    <div class="wrapper white-wrapper">
      <div class="container inner">
        <div class="row d-flex align-items-center">
          <div class="col-lg-6 pr-35 pr-sm-15">
            <figure class="rounded"><img src="../missio-html/template/missio/style/images/art/about4.jpg" alt=""></figure>
          </div>
          <!-- /column -->
          <div class="space30 d-block d-lg-none d-xl-none"></div>
          <div class="col-lg-6">
            <h2 class="section-title section-title-upper">About Me</h2>
            <p class="lead">Hi! I’m Missio, a travel videographer. My passion is taking videos of the most attractive places around the world.</p>
            <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
              Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus. Fusce dapibus tellus cursus commodo.</p>
            <div class="space10"></div>
            <ul class="unordered-list">
              <li>Wondlan Wer01 Wireless Slider Time Lapse</li>
              <li>Nikon D5 24-70mm F2.8</li>
              <li>Nikon Af-S 24Mm F/1.4G Ed Lens</li>
              <li>Wondlan Sniper Sn 2.1 Wf Wireless Dslr Rig</li>
            </ul>
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.wrapper -->
    <div class="wrapper light-wrapper">
      <div class="container inner">
        <h2 class="section-title section-title-upper text-center">My Latest Videos</h2>
        <p class="lead text-center">Life is an adventure. Capture every minute.</p>
        <div class="space20"></div>
        <div class="d-flex flex-row align-items-center">
          <div>
            <div class="cbp-l-filters-dropdownTitle">Filter By:</div>
          </div>
          <div>
            <div id="cube-inline-7-filter" class="cbp-l-filters-dropdown">
              <div class="cbp-l-filters-dropdownWrap">
                <div class="cbp-l-filters-dropdownHeader">All</div>
                <div class="cbp-l-filters-dropdownList">
                  <div data-filter="*" class="cbp-filter-item-active cbp-filter-item">All</div>
                  <div data-filter=".travel" class="cbp-filter-item">Travel</div>
                  <div data-filter=".nature" class="cbp-filter-item">Nature</div>
                  <div data-filter=".ocean" class="cbp-filter-item">Ocean</div>
                  <div data-filter=".safari" class="cbp-filter-item">Safari</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="space20"></div>
        <div id="cube-inline-7" class="cbp cbp-inline-top cube-inline-7">
          <div class="cbp-item text-center nature">
            <figure class="overlay overlay4 rounded"><a href="ajax/portfolio7-post1.html" class="cbp-singlePageInline"><img src="../missio-html/template/missio/style/images/art/v1.jpg" alt="" /></a>
              <figcaption class="d-flex">
                <div class="align-self-center mx-auto">
                  <h3 class="caption mb-0">It Snowed</h3>
                </div>
              </figcaption>
            </figure>
          </div>
          <!--/.cbp-item -->
          <div class="cbp-item text-center ocean">
            <figure class="overlay overlay4 rounded"><a href="ajax/portfolio7-post2.html" class="cbp-singlePageInline"><img src="../missio-html/template/missio/style/images/art/v2.jpg" alt="" /></a>
              <figcaption class="d-flex">
                <div class="align-self-center mx-auto">
                  <h3 class="caption mb-0">TFS & TMK</h3>
                </div>
              </figcaption>
            </figure>
          </div>
          <!--/.cbp-item -->
          <div class="cbp-item text-center nature">
            <figure class="overlay overlay4 rounded"><a href="ajax/portfolio7-post3.html" class="cbp-singlePageInline"><img src="../missio-html/template/missio/style/images/art/v3.jpg" alt="" /></a>
              <figcaption class="d-flex">
                <div class="align-self-center mx-auto">
                  <h3 class="caption mb-0">Iceland Footage</h3>
                </div>
              </figcaption>
            </figure>
          </div>
          <!--/.cbp-item -->
          <div class="cbp-item text-center ocean">
            <figure class="overlay overlay4 rounded"><a href="ajax/portfolio7-post4.html" class="cbp-singlePageInline"><img src="../missio-html/template/missio/style/images/art/v4.jpg" alt="" /></a>
              <figcaption class="d-flex">
                <div class="align-self-center mx-auto">
                  <h3 class="caption mb-0">Whale Watching</h3>
                </div>
              </figcaption>
            </figure>
          </div>
          <!--/.cbp-item -->
          <div class="cbp-item text-center nature">
            <figure class="overlay overlay4 rounded"><a href="ajax/portfolio7-post5.html" class="cbp-singlePageInline"><img src="../missio-html/template/missio/style/images/art/v5.jpg" alt="" /></a>
              <figcaption class="d-flex">
                <div class="align-self-center mx-auto">
                  <h3 class="caption mb-0">Vermont In Autumn</h3>
                </div>
              </figcaption>
            </figure>
          </div>
          <!--/.cbp-item -->
          <div class="cbp-item text-center travel">
            <figure class="overlay overlay4 rounded"><a href="ajax/portfolio7-post6.html" class="cbp-singlePageInline"><img src="../missio-html/template/missio/style/images/art/v6.jpg" alt="" /></a>
              <figcaption class="d-flex">
                <div class="align-self-center mx-auto">
                  <h3 class="caption mb-0">Cruise Ship</h3>
                </div>
              </figcaption>
            </figure>
          </div>
          <!--/.cbp-item -->
          <div class="cbp-item text-center travel">
            <figure class="overlay overlay4 rounded"><a href="ajax/portfolio7-post7.html" class="cbp-singlePageInline"><img src="../missio-html/template/missio/style/images/art/v7.jpg" alt="" /></a>
              <figcaption class="d-flex">
                <div class="align-self-center mx-auto">
                  <h3 class="caption mb-0">Ireland Footage</h3>
                </div>
              </figcaption>
            </figure>
          </div>
          <!--/.cbp-item -->
          <div class="cbp-item text-center travel">
            <figure class="overlay overlay4 rounded"><a href="ajax/portfolio7-post8.html" class="cbp-singlePageInline"><img src="../missio-html/template/missio/style/images/art/v8.jpg" alt="" /></a>
              <figcaption class="d-flex">
                <div class="align-self-center mx-auto">
                  <h3 class="caption mb-0">Skyline Car</h3>
                </div>
              </figcaption>
            </figure>
          </div>
          <!--/.cbp-item -->
          <div class="cbp-item text-center safari">
            <figure class="overlay overlay4 rounded"><a href="ajax/portfolio7-post9.html" class="cbp-singlePageInline"><img src="../missio-html/template/missio/style/images/art/v9.jpg" alt="" /></a>
              <figcaption class="d-flex">
                <div class="align-self-center mx-auto">
                  <h3 class="caption mb-0">Kruger Safari</h3>
                </div>
              </figcaption>
            </figure>
          </div>
          <!--/.cbp-item -->
        </div>
        <!--/.cbp -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.wrapper -->
    <div class="wrapper image-wrapper bg-image inverse-text" data-image-src="../missio-html/template/missio/style/images/art/bg6.jpg">
      <div class="container inner pt-150 pb-150">
        <h2 class="heading text-uppercase mb-0 text-center">I take photographs with<br class="d-none d-lg-block" />creativity, concept & passion</h2>
      </div>
      <!-- /.container -->
    </div>
    <!-- /.wrapper -->
    <div class="wrapper white-wrapper">
      <div class="container inner">
        <h2 class="section-title section-title-upper text-center">From My Journal</h2>
        <div class="cube-carousel cbp grid-view">
          <div class="cbp-item">
            <figure class="overlay overlay1 mb-30 rounded"><a href="#"> <img src="../missio-html/template/missio/style/images/art/gb28.jpg" alt="" /></a>
              <figcaption>
                <h5 class="text-uppercase from-top mb-0">Read More</h5>
              </figcaption>
            </figure>
            <h2 class="post-title mb-10"><a href="blog-post.html">Ligula tristique quis risus eget urna mollis ornare porttitor</a></h2>
            <div class="meta mb-15"><span class="date">5 Jul 2018</span><span class="comments"><a href="#">3</a></span><span class="category"><a href="#">Reflection</a></span></div>
            <div class="post-content">
              <p>Morbi leo risus, porta ac consectetur luctus vestibulum at eros. Maecenas faucibus mollis interdum eget nulla vitae elit libero.</p>
            </div>
            <!-- /.post-content -->
          </div>
          <!-- /.post -->
          <div class="cbp-item">
            <figure class="overlay overlay1 mb-30 rounded"><a href="#"> <img src="../missio-html/template/missio/style/images/art/gb29.jpg" alt="" /></a>
              <figcaption>
                <h5 class="text-uppercase from-top mb-0">Read More</h5>
              </figcaption>
            </figure>
            <h2 class="post-title mb-10"><a href="blog-post.html">Nullam id dolor elit id nibh pharetra augue venenatis</a></h2>
            <div class="meta mb-15"><span class="date">18 Jun 2018</span><span class="comments"><a href="#">5</a></span><span class="category"><a href="#">Entertainment</a></span></div>
            <div class="post-content">
              <p>Morbi leo risus, porta ac consectetur luctus vestibulum at eros. Maecenas faucibus mollis interdum eget nulla vitae elit libero.</p>
            </div>
            <!-- /.post-content -->
          </div>
          <!-- /.post -->
          <div class="cbp-item">
            <figure class="overlay overlay1 mb-30 rounded"><a href="#"> <img src="../missio-html/template/missio/style/images/art/gb30.jpg" alt="" /></a>
              <figcaption>
                <h5 class="text-uppercase from-top mb-0">Read More</h5>
              </figcaption>
            </figure>
            <h2 class="post-title mb-10"><a href="blog-post.html">Ultricies fusce porta elit pharetra augue faucibus</a></h2>
            <div class="meta mb-15"><span class="date">14 May 2018</span><span class="comments"><a href="#">7</a></span><span class="category"><a href="#">Travel</a></span></div>
            <div class="post-content">
              <p>Morbi leo risus, porta ac consectetur luctus vestibulum at eros. Maecenas faucibus mollis interdum eget nulla vitae elit libero.</p>
            </div>
            <!-- /.post-content -->
          </div>
          <!-- /.post -->
          <div class="cbp-item">
            <figure class="overlay overlay1 mb-30 rounded"><a href="#"> <img src="../missio-html/template/missio/style/images/art/gb31.jpg" alt="" /></a>
              <figcaption>
                <h5 class="text-uppercase from-top mb-0">Read More</h5>
              </figcaption>
            </figure>
            <h2 class="post-title mb-10"><a href="blog-post.html">Morbi leo risus porta eget metus est non commodolacus</a></h2>
            <div class="meta mb-15"><span class="date">9 Apr 2018</span><span class="comments"><a href="#">4</a></span><span class="category"><a href="#">Beach</a></span></div>
            <div class="post-content">
              <p>Morbi leo risus, porta ac consectetur luctus vestibulum at eros. Maecenas faucibus mollis interdum eget nulla vitae elit libero.</p>
            </div>
            <!-- /.post-content -->
          </div>
          <!-- /.post -->
          <div class="cbp-item">
            <figure class="overlay overlay1 mb-30 rounded"><a href="#"> <img src="../missio-html/template/missio/style/images/art/gb32.jpg" alt="" /></a>
              <figcaption>
                <h5 class="text-uppercase from-top mb-0">Read More</h5>
              </figcaption>
            </figure>
            <h2 class="post-title mb-10"><a href="blog-post.html">Mollis adipiscing lorem quis mollis eget lacinia faucibus</a></h2>
            <div class="meta mb-15"><span class="date">23 Feb 2018</span><span class="comments"><a href="#">8</a></span><span class="category"><a href="#">Travel</a></span></div>
            <div class="post-content">
              <p>Morbi leo risus, porta ac consectetur luctus vestibulum at eros. Maecenas faucibus mollis interdum eget nulla vitae elit libero.</p>
            </div>
            <!-- /.post-content -->
          </div>
          <!-- /.post -->
          <div class="cbp-item">
            <figure class="overlay overlay1 mb-30 rounded"><a href="#"> <img src="../missio-html/template/missio/style/images/art/gb33.jpg" alt="" /></a>
              <figcaption>
                <h5 class="text-uppercase from-top mb-0">Read More</h5>
              </figcaption>
            </figure>
            <h2 class="post-title mb-10"><a href="blog-post.html">Fusce mattis euismod sed diam eget risus amet tempus</a></h2>
            <div class="meta mb-15"><span class="date">15 Jan 2018</span><span class="comments"><a href="#">7</a></span><span class="category"><a href="#">Building</a></span></div>
            <div class="post-content">
              <p>Morbi leo risus, porta ac consectetur luctus vestibulum at eros. Maecenas faucibus mollis interdum eget nulla vitae elit libero.</p>
            </div>
            <!-- /.post-content -->
          </div>
          <!-- /.post -->
        </div>
        <!-- /.cbp -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.wrapper -->
    <footer class="dark-wrapper inverse-text">
      <div class="container inner">
        <div class="row d-md-flex align-items-md-center">
          <div class="col-md-4 text-center text-md-left">
            <p class="mb-0">© 2019 Missio. All rights reserved.</p>
          </div>
          <!--/column -->
          <div class="col-md-4 text-center">
            <img src="#" srcset="../missio-html/template/missio/style/images/logo-light.png 1x, style/images/logo-light@2x.png 2x" alt="" />
          </div>
          <!--/column -->
          <div class="col-md-4 text-center text-md-right">
            <ul class="social social-mute social-s mt-10">
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
              <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
              <li><a href="#"><i class="fa fa-vimeo"></i></a></li>
              <li><a href="#"><i class="fa fa-instagram"></i></a></li>
            </ul>
          </div>
          <!--/column -->
        </div>
        <!--/.row -->
      </div>
      <!-- /.container -->
    </footer>
  </div>`
const Home = () => {
    return (
        <>
            {/* <h1>
                Home
            </h1> */}
            {parse(html)}
        </>
    )
}


export default Home;