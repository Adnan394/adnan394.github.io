$(window).scroll(function () {
  let wscroll = $(this).scrollTop();
  console.log(wscroll);

  $(".jumbotron h1").css({
    transform: "translate(0px, " + wscroll + "%)",
  });
  $(".jumbotron p").css({
    transform: "translate(0px, " + wscroll * 4 + "%)",
  });

  if (wscroll >= 400) {
    $(".about .col").css({
      opacity: "1",
      transform: "rotate(0deg)",
    });
    $(".jumbotron h1").css({
      opacity: "0",
    });
  } else {
    $(".about .col").css({
      opacity: "0",
      transform: "rotate(20deg)",
    });
    $(".jumbotron h1").css({
      opacity: "1",
    });
  }

  if (wscroll >= 750) {
    $(".card-container .card").css({
      opacity: "1",
    });
  } else {
    $(".card-container .card").css({
      opacity: "0",
    });
  }
});
