var jsondata = {
  statusarr: [
    {
      statustext:
        "My biggest concern in life is actually how my online friends can be informed of my death..!!",
      key: "status1",
      category: "funny"
    },
    {
      statustext:
        " I Wonder What Happens When Doctor's Wife Eats An Apple A Day . . .",
      key: "status2",
      category: "funny"
    },
    {
      statustext: "Life is Short - Chat Fast!",
      key: "status3",
      category: "funny"
    },
    {
      statustext:
        "Doing nothing is very hard thing to do..you never know when to finish.",
      key: "status4",
      category: "funny"
    },
    {
      statustext:
        "Light travels faster than sound...that's why people appear bright until they speak",
      key: "status5",
      category: "funny"
    },
    {
      statustext:
        "Guys are like stars, there are millions of them, but only one makes your dreams come ",
      key: "status6",
      category: "funny"
    },
    {
      statustext:
        "I'm not lazy. I'm on energy-saving mode. Now hush, or you'll drain my battery.",
      key: "status7",
      category: "funny"
    },
    {
      statustext:
        "I have 1% battery left. Whoever calls me or sends me a message will become my enemy",
      key: "status8",
      category: "funny"
    },
    {
      statustext:
        "You're just jealous because the voices like talking to me more.",
      key: "status9",
      category: "funny"
    },
    {
      statustext:
        "Life isn't about how many breaths you take but about the moments that take your breathe away.",
      key: "status10",
      category: "funny"
    },
    {
      statustext:
        "A book-store is only pieces of evidence we have that people are still thinking.",
      key: "status11",
      category: "funny"
    },
    {
      statustext:
        "Mosquitos are like family. Annoying but they carry your blood.",
      key: "status12",
      category: "funny"
    },
    {
      statustext:
        "A book-store is only pieces of evidence we have that people are still thinking.",
      key: "status11",
      category: "funny"
    },
    {
      statustext:
        "Mosquitos are like family. Annoying but they carry your blood.",
      key: "status12",
      category: "funny"
    },
    {
      statustext:
        "A book-store is only pieces of evidence we have that people are still thinking.",
      key: "status11",
      category: "funny"
    },
    {
      statustext:
        "Mosquitos are like family. Annoying but they carry your blood.",
      key: "status12",
      category: "funny"
    },
    {
      statustext:
        "A book-store is only pieces of evidence we have that people are still thinking.",
      key: "status11",
      category: "funny"
    },
    {
      statustext:
        "Mosquitos are like family. Annoying but they carry your blood.",
      key: "status12",
      category: "funny"
    },
    {
      statustext:
        "A book-store is only pieces of evidence we have that people are still thinking.",
      key: "status11",
      category: "funny"
    },
    {
      statustext:
        "Mosquitos are like family. Annoying but they carry your blood.",
      key: "status12",
      category: "funny"
    },
    {
      statustext:
        "A book-store is only pieces of evidence we have that people are still thinking.",
      key: "status11",
      category: "funny"
    },
    {
      statustext:
        "Mosquitos are like family. Annoying but they carry your blood.",
      key: "status12",
      category: "funny"
    }
  ]
};
$(document).ready(function(data) {
  $.each(jsondata.statusarr, function(index, data) {
    var firstdiv =
      "<div class='innerdiv funnydiv'><p class='grid-item funny-item'>" +
      data.statustext +
      "</p></div>";
    setTimeout(() => {
      $(".grid-container").append(firstdiv);
    }, 50 * index);
  });
  // document.body.style.overflow = "scroll";
});
