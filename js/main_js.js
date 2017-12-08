window.onload=init_page;
window.onkeydown = smoothscroll;
window.onscroll = getpositon;
// $window.resize(init_div);



var currentdiv;
var containerlist = document.getElementsByClassName("Container");
var containertops = [];
var containerbottoms = [];
var animatedelements = [];

function init_page()
{
  // console.log("exicuted");
  $(window).scrollTop(0);
  init_div();
}

function init_div()
{
  // containerlist = document.getElementsByClassName("Container");
  for (var i = 0; i < containerlist.length; i++)
  {
    containertops[i] = containerlist[i].getBoundingClientRect().top +1;
    containerbottoms[i] = containerlist[i].getBoundingClientRect().bottom;
    var tempcontain = containerlist[i].getElementsByClassName("action");

    animatedelements[i]=[];
    for(var j = 0;j<tempcontain.length;j++)
    {
      animatedelements[i][j]=tempcontain[j];
    }
    console.log(containerlist[i].getBoundingClientRect().top);
    console.log(containerlist[i]);
  }
  getpositon();
  console.log("Animated elements" + animatedelements);
  window.focus;
  console.log(containertops );
  console.log(window.pageYOffset);
}

function getpositon()
{
  for(var i=0; i<containerlist.length; i++)
  {
    if(window.pageYOffset <= containerbottoms[i])
    {
      currentdiv = i;
      console.log(currentdiv);
      break;
    }
  }
  changeitems();
}

function changeitems()
{
  posthis = (window.pageYOffset - containertops[currentdiv]);
  posnext = (window.pageYOffset - containertops[currentdiv+1]);
  console.log(posthis);
  console.log(posnext);
  for(var i =0; i<animatedelements[currentdiv].length; i++)
  {
    doanimate(animatedelements[currentdiv], posthis);
    // $(animatedelements[currentdiv][i]).css("--position", posthis);
    $(animatedelements[currentdiv]).css("transform", "rotate("+posthis/5+"deg)");
  }
  for(var i =0; i<animatedelements[currentdiv+1].length; i++)
  {
    // $(animatedelements[currentdiv+1][i]).css("--position", posnext);
    doanimate(animatedelements[currentdiv+1], posnext);
    $(animatedelements[currentdiv+1]).css("transform", "rotate("+posnext/5+"deg)");
  }
}

function doanimate(thediv, theposition)
{
  console.log("classname: "+thediv.className);
  // switch (thediv.classname) {
  //   case expression:
  //
  //     break;
  //   default:
  //
  // }
}




function smoothscroll(e)
{
  if (typeof e == 'number')
  {
    {var e=e};
  }
  else
  {
    var e = e || window.event;
    e = e.keyCode
  }

  console.log(e.keyCode);
  if(e== 40)
  {
    // window.scrollTo(containertops[currentdiv]);
    $('html,body').animate({ scrollTop: containertops[currentdiv+1]}, 'slow', 'linear');

  }
  if(e== 38)
  {
    if (containertops[currentdiv] == window.pageYOffset)
    {
      $('html,body').animate({ scrollTop: containertops[currentdiv-1]}, 'slow', 'linear');
    }
    else
    {
      $('html,body').animate({ scrollTop: containertops[currentdiv]}, 'slow', 'linear');
    }
  }
  window.focus();
}
