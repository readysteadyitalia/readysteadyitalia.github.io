function dimensioni() {
  //ver1
  if(x5 <= x4) {
    if(x3 <= x2) {
      $("#ver1").css({
        width: x1+"px", height: x1+"px",
        right: x2+x4+m*2+"px", bottom: "0",

      })
    } else {
      if(x1 <= x4 && x4 <= x2) {
        $("#ver1").css({
          width: x1+"px", height: x1+"px",
          right: x2+x4+m*2+"px", bottom: "0",

        })
      } else {
        $("#ver1").css({
          width: x1+"px", height: x1+"px",
          right: x3+x4+m*2+"px", bottom: "0",

        })
      }
    }
  } else if(x5 > x4 && x1 > x4) {
    if(x3 <= x2) {
      $("#ver1").css({
        width: x1+"px", height: x1+"px",
        right: x2+x5+m*2+"px", bottom: "0",

      })
    } else {
      $("#ver1").css({
        width: x1+"px", height: x1+"px",
        right: x3+x5+m*2+"px", bottom: "0",
      })
    }
  } else if(x5>x4 && x1<= x4 && x4 > x2) {
    if(x3 <= x2) {
      $("#ver1").css({
        width: x1+"px", height: x1+"px",
        right: x2+x4+m*2+"px", bottom: "0",
      })
    } else {
      $("#ver1").css({
        width: x1+"px", height: x1+"px",
        right: x3+x4+m*2+"px", bottom: "0",
      })
    }
  } else if(x5>x4 && x1<= x4 && x4 <= x2) {
    $("#ver1").css({
      width: x1+"px", height: x1+"px",
      right: x2+x4+m*2+"px", bottom: "0",
    })
  }

  //ver2
  $("#ver2").css({
      width: x2+"px", height: x2+"px",
    right: "0", bottom: "0",

  })
  //ver3
  $("#ver3").css({
    width: x3+"px", height: x3+"px",
    right: "0", bottom: x2+m+"px",

  })
  //ver4
  if(x4 > x2 && x3 > x2) {
        $("#ver4").css({width: x4+"px", height: x4+"px",
        right: x3+m+"px", bottom: "0",

      })
      } else {
      $("#ver4").css({width: x4+"px", height: x4+"px",
      right: x2+m+"px", bottom: "0",

  })
    }
  //ver5
  if(x4 <= x2 && x3 <= x2) {
    $("#ver5").css({
      width: x5+"px", height: x5+"px",
      right: x2+m+"px", bottom: x4+m+"px",

    })
  } else if (x4 <= x2 && x3 > x2) {
    $("#ver5").css({
      width: x5+"px", height: x5+"px",
      right: x3+m+"px", bottom: x2+m+"px",

    })
  } else if (x4 > x2 && x3 > x2) {
    $("#ver5").css({
      width: x5+"px", height: x5+"px",
      right: x3+m+"px", bottom: x4+m+"px",

    })
  } else if (x4 > x2 && x3 <= x2) {
    $("#ver5").css({
      width: x5+"px", height: x5+"px",
      right: x2+m+"px", bottom: x4+m+"px",

    })
  }
  //ver6
  if(x10 <= x9) {
    if(x8 <= x7) {
      $("#ver6").css({
        width: x6+"px", height: x6+"px",
        left: x7+x9+m*2+"px", bottom: "0",

      })
    } else {
      if(x6 <= x9 && x9 <= x7) {
        $("#ver6").css({
          width: x6+"px", height: x6+"px",
          left: x7+x9+m*2+"px", bottom: "0",

        })
      } else {
        $("#ver6").css({
          width: x6+"px", height: x6+"px",
          left: x8+x9+m*2+"px", bottom: "0",

        })
      }
    }
  } else if(x10 > x9 && x6 > x9) {
    if(x8 <= x7) {
      $("#ver6").css({
        width: x6+"px", height: x6+"px",
        left: x7+x10+m*2+"px", bottom: "0",

      })
    } else {
      $("#ver6").css({
        width: x6+"px", height: x6+"px",
        left: x8+x10+m*2+"px", bottom: "0",
      })
    }
  } else if(x10>x9 && x6<= x9 && x9 > x7) {
    if(x8 <= x7) {
      $("#ver6").css({
        width: x6+"px", height: x6+"px",
        left: x7+x9+m*2+"px", bottom: "0",
      })
    } else {
      $("#ver6").css({
        width: x6+"px", height: x6+"px",
        left: x8+x9+m*2+"px", bottom: "0",
      })
    }
  } else if(x10>x9 && x6<= x9 && x9 <= x7) {
    $("#ver6").css({
      width: x6+"px", height: x6+"px",
      left: x7+x9+m*2+"px", bottom: "0",
    })
  }

  //ver7
  $("#ver7").css({
      width: x7+"px", height: x7+"px",
    left: "0", bottom: "0",

  })
  //ver8
  $("#ver8").css({
    width: x8+"px", height: x8+"px",
    left: "0", bottom: x7+m+"px",

  })
  //ver9
  if(x9 > x7 && x8 > x7) {
        $("#ver9").css({width: x9+"px", height: x9+"px",
        left: x8+m+"px", bottom: "0",

    })
      } else {
      $("#ver9").css({width: x9+"px", height: x9+"px",
      left: x7+m+"px", bottom: "0",})
    }
  //ver10
  if (x9 <= x7) {
    if(x8 <= x7) {
      $("#ver10").css({
        width: x10+"px", height: x10+"px",
        left: x7+m+"px", bottom: x9+m+"px",

      })
    } else {
      $("#ver10").css({
        width: x10+"px", height: x10+"px",
        left: x8+m+"px", bottom: x7+m+"px",

      })
    }
  } else if(x9 > x7) {
    if(x8 <= x7) {
      $("#ver10").css({
        width: x10+"px", height: x10+"px",
        left: x7+m+"px", bottom: x9+m+"px",

      })
    } else {
      $("#ver10").css({
        width: x10+"px", height: x10+"px",
        left: x8+m+"px", bottom: x9+m+"px",

      })
    }
  }
  //ver11
  if(x15 <= x14) {
    if(x13 <= x12) {
      $("#ver11").css({
        width: x11+"px", height: x11+"px",
        left: x12+x14+m*2+"px", top: "0",

      })
    } else {
      if(x11 <= x14 && x14 <= x12) {
        $("#ver11").css({
          width: x11+"px", height: x11+"px",
          left: x12+x14+m*2+"px", top: "0",

        })
      } else {
        $("#ver11").css({
          width: x11+"px", height: x11+"px",
          left: x13+x14+m*2+"px", top: "0",

        })
      }
    }
  } else if(x15 > x14 && x11 > x14) {
    if(x13 <= x12) {
      $("#ver11").css({
        width: x11+"px", height: x11+"px",
        left: x12+x15+m*2+"px", top: "0",

      })
    } else {
      $("#ver11").css({
        width: x11+"px", height: x11+"px",
        left: x13+x15+m*2+"px", top: "0",
      })
    }
  } else if(x15>x14 && x11<= x14 && x14 > x12) {
    if(x13 <= x12) {
      $("#ver11").css({
        width: x11+"px", height: x11+"px",
        left: x12+x14+m*2+"px", top: "0",
      })
    } else {
      $("#ver11").css({
        width: x11+"px", height: x11+"px",
        left: x13+x14+m*2+"px", top: "0",
      })
    }
  } else if(x15>x14 && x11<= x14 && x14 <= x12) {
    $("#ver11").css({
      width: x11+"px", height: x11+"px",
      left: x12+x14+m*2+"px", top: "0",
    })
  }

    //ver12
    $("#ver12").css({
        width: x12+"px", height: x12+"px",
      left: "0", top: "0",

    })
    //ver13
    $("#ver13").css({
      width: x13+"px", height: x13+"px",
      left: "0", top: x12+m+"px",

    })
    //ver14
    if(x14 > x12 && x13 > x12) {
          $("#ver14").css({width: x14+"px", height: x14+"px",
          left: x13+m+"px", top: "0",
      })
        } else {
        $("#ver14").css({width: x14+"px", height: x14+"px",
        left: x12+m+"px", top: "0",
    })
      }
    //ver15
    if (x14 <= x12) {
      if(x13 <= x12) {
        $("#ver15").css({
          width: x15+"px", height: x15+"px",
          left: x12+m+"px", top: x14+m+"px",
        })
      } else {
        $("#ver15").css({
          width: x15+"px", height: x15+"px",
          left: x13+m+"px", top: x12+m+"px",
        })
      }
    } else if(x14 > x12) {
      if(x13 <= x12) {
        $("#ver15").css({
          width: x15+"px", height: x15+"px",
          left: x12+m+"px", top: x14+m+"px",
        })
      } else {
        $("#ver15").css({
          width: x15+"px", height: x15+"px",
          left: x13+m+"px", top: x14+m+"px",
        })
      }
    }
    //ver16
    if(x20 <= x19) {
      if(x18 <= x17) {
        $("#ver16").css({
          width: x16+"px", height: x16+"px",
          right: x17+x19+2*m+"px", top: "0",
        })
      } else {
        $("#ver16").css({
          width: x16+"px", height: x16+"px",
          right: x18+x19+2*m+"px", top: "0",
        })
      }
    } else if(x20 > x19 && x16 > x19) {
      if(x18 <= x17) {
        $("#ver16").css({
          width: x16+"px", height: x16+"px",
          right: x17+x20+2*m+"px", top: "0",
        })
      } else {
        $("#ver16").css({
          width: x16+"px", height: x16+"px",
          right: x18+x20+2*m+"px", top: "0",
        })
      }
    } else if(x20>x19 && x16<= x19) {
      if(x18 <= x17) {
        $("#ver16").css({
          width: x16+"px", height: x16+"px",
          right: x17+x19+m*2+"px", top: "0",

        })
      } else {
        $("#ver16").css({
          width: x16+"px", height: x16+"px",
          right: x18+x19+m*2+"px", top: "0",

        })
      }
    }
    if(x16 == x19) {
      $("#ver16").css({
        width: x16+"px", height: x16+"px",
        right: x19+x17+m*2+"px", top: "0",
      })
    }

    //ver17
    $("#ver17").css({
        width: x17+"px", height: x17+"px",
      right: "0", top: "0",
    })
    //ver18
    $("#ver18").css({
      width: x18+"px", height: x18+"px",
      right: "0", top: x17+m+"px",
    })
    //ver19
    if(x19 > x17 && x18 > x17) {
          $("#ver19").css({width: x19+"px", height: x19+"px",
          right: x18+m+"px", top: "0",

      })
        } else {
        $("#ver19").css({width: x19+"px", height: x19+"px",
        right: x17+m+"px", top: "0", })
      }
    //ver20
    if (x19 <= x17) {
      if(x18 <= x17) {
        $("#ver20").css({
          width: x20+"px", height: x20+"px",
          right: x17+m+"px", top: x19+m+"px",
        })
      } else {
        $("#ver20").css({
          width: x20+"px", height: x20+"px",
          right: x18+m+"px", top: x17+m+"px",

        })
      }
    } else if(x19 > x17) {
      if(x18 <= x17) {
        $("#ver20").css({
          width: x20+"px", height: x20+"px",
          right: x17+m+"px", top: x19+m+"px",

        })
      } else {
        $("#ver20").css({
          width: x20+"px", height: x20+"px",
          right: x18+m+"px", top: x19+m+"px",

        })
      }
    }
}

dimensioni();
