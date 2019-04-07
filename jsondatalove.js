var jsondataLove = {
  statusarr: [
    {
      statustext:
        "I know I am in love with you because my reality is finally better than my dreams",
      key: "status1",
      category: "love"
    },
    {
      statustext: "Your love is all I need to feel complete.",
      key: "status2",
      category: "love"
    },
    {
      statustext:
        "You may hold my hand for a while, but you hold my heart forever.",
      key: "status3",
      category: "love"
    },
    {
      statustext: "The best thing to hold onto in life is each other..",
      key: "status4",
      category: "love"
    },
    {
      statustext: "My night has become a sunny dawn because of you.",
      key: "status5",
      category: "love"
    },
    {
      statustext: "I am happiest when I'm right next to you ",
      key: "status6",
      category: "love"
    },
    {
      statustext:
        "True love doesn't happen right away; it's an ever-growing process. It develops after you've gone through many ups and downs, when you've suffered together, cried together, laughed together.",
      key: "status7",
      category: "love"
    },
    {
      statustext:
        "Romance is the glamour which turns the dust of everyday life into a golden haze",
      key: "status8",
      category: "love"
    },
    {
      statustext:
        "They say when you are missing someone that they are probably feeling the same, but I don't think it's possible for you to miss me as much as I'm missing you right now.",
      key: "status9",
      category: "love"
    },
    {
      statustext:
        "And he took her in his arms and kissed her under the sunlit sky, and he cared not that they stood high upon the walls in the sight of many..",
      key: "status10",
      category: "love"
    },
    {
      statustext:
        "For the two of us, home isn't a place. It is a person. And we are finally home.",
      key: "status11",
      category: "love"
    },
    {
      statustext:
        "I crossed a thousand leagues to come to you, and lost the best part of me along the way. Don't tell me to leave.",
      key: "status12",
      category: "love"
    },
    {
      statustext:
        "She was ready to deny the existence of space and time rather than admit that love might not be eternal.",
      key: "status11",
      category: "love"
    },
    {
      statustext: "Your hand touching mine. This is how galaxies collide.",
      key: "status12",
      category: "love"
    },
    {
      statustext:
        "Promise me you'll never forget me, because if I thought you would, I'd never leave.",
      key: "status11",
      category: "love"
    },
    {
      statustext:
        "The very first moment I beheld him, my heart was irrevocably gone ..",
      key: "status12",
      category: "love"
    },

    {
      statustext:
        "You know that when I hate you, it is because I love you to a point of passion that unhinges my soul..",
      key: "status12",
      category: "love"
    },
    {
      statustext:
        "There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.",
      key: "status11",
      category: "love"
    },
    {
      statustext:
        "There is no pretending,' Jace said with absolute clarity. 'I love you, and I will love you until I die, and if there is life after that, I'll love you then.",
      key: "status12",
      category: "love"
    },
    {
      statustext:
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
      key: "status11",
      category: "love"
    },
    {
      statustext:
        "One day you will kiss a man you can't breathe without and find that breath is of little consequence..",
      key: "status12",
      category: "love"
    }
  ]
};
$(document).ready(function(data) {
  $.each(jsondataLove.statusarr, function(index, data) {
    var firstdiv =
      "<div class='innerdiv lovediv'><p class='grid-item love-item'>" +
      data.statustext +
      "</p></div>";
    setTimeout(() => {
      $(".grid-container").append(firstdiv);
    }, 50 * index);
  });
  document.body.style.overflow = "scroll";
});
