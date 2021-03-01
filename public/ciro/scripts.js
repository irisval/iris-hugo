// (function main() {
// //     var values = [{id: 0, line: "this is a test line", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: ""},
// // {id: 1, line: "this is a test line", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "a"},
// // {id: 2, line: "this is a test line", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "e"},
// // {id: 3, line: "this is a test line", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "f"},
// // {id: 4, line: "this is a test line", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "d"},
// // {id: 5, line: "this is a test line", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "g"},
// // {id: 6, line: "this is a test line", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "g"},
// // {id: 7, line: "this is a test line", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "g"},
// // {id: 8, line: "this is a test line", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "g"},
// // {id: 9, line: "this is a test line", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "g"},
// // {id: 10, line: "this is a test line", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "g"},
// // {id: 11, line: "this is a test line", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "g"},
// // {id: 12, line: "this is a test line", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "g"},
// // {id: 13, line: "this is a test line", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "g"},
// // {id: 14, line: "this is a test line", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "g"},
// // {id: 15, line: "this is a test line", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "g"},
// // {id: 16, line: "this is a test line", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "g"},
// // {id: 17, line: "this is a test line", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "g"}];

// //     function getRandomInRange(from, to) {
// //         return (Math.random() * (to - from) + from).toFixed() * 1;
// //     }
 
// //     var offsets = $('#center').offset();
// //     var top = offsets.top;
// //     var left = offsets.left;
// //     var right = left + $('#center').width();
// //     var bottom = $(window).height() - top - $('#center').height();
// //     var divsize = ((Math.random()*20) + 30).toFixed();

// //         var leftposx = getRandomInRange(0, left);
// //         var leftposy = getRandomInRange(0, $(document).height()- divsize);

// //         var topposx = getRandomInRange(left, right);
// //         var topposy = getRandomInRange(top, 0);

// //         var rightposx = getRandomInRange(right, $(document).width()- divsize);
// //         var rightposy = getRandomInRange(0, $(document).height()- divsize);

// //         var bottomposx = getRandomInRange(left, right);
// //         var bottomposy = getRandomInRange(1.5 * bottom, $(document).height());

// //     for (var i = 0; i < 5; i++) {
// //         makeDiv(leftposx, leftposy, divsize, values[i]);
// //          var leftposx = getRandomInRange(0, left);
// //         var leftposy = getRandomInRange(0, $(document).height()- divsize);
// //     }
// //      for (var i = 5; i < 11; i++) {
// //         makeDiv(rightposx, rightposy, divsize, values[i]);
// //          var rightposx = getRandomInRange(right, $(document).width()- divsize);
// //         var rightposy = getRandomInRange(0, $(document).height()- divsize);
// //     }
// //      for (var i = 11; i < 15; i++) {
// //         makeDiv(topposx, topposy, divsize, values[i]);
// //          var topposx = getRandomInRange(left, right);
// //         var topposy = getRandomInRange(top, 0);
// //     }
// //      for (var i = 15; i < 18; i++) {
// //         makeDiv(bottomposx, bottomposy, divsize, values[i]);
// //          var bottomposx = getRandomInRange(left, right);
// //         var bottomposy = getRandomInRange(1.5 * bottom, $(document).height()- divsize);
// //     }

// //     function makeDiv(x, y, divsize, box) {
        
// //         var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
// //         $newdiv = $('<div/>').css({
// //             'width':divsize+'px',
// //             'height':divsize+'px',
// //             'background-color': color
// //         }).attr('id', box.id).attr('class', 'box');
       
      
// //         // var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
// //         // var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

// //             $newdiv.css({
// //                 'position':'absolute',
// //                 'left':x+'px',
// //                 'top':y+'px'
// //             }).appendTo( 'body' );
// //     }

 
// })();

$(window).on('load', function() {
     var values = [{id: 0, link: "https://www.youtube.com/watch?v=qE-gdNIL8WI", line: "'I wanna drink pink lemonade watching movie trailers 'till's late'", song: "Pink Lemonade", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "You've been such a strong support system for myself and you've really been there for so many people"},

{id: 1, link: "https://www.youtube.com/watch?v=cvm-OQiD3L8", line: "'I like your socks / I like that you like socks'", song: "Socks", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "You have the silliest & best socks in the world. But it's not just socks! Whatever it is that you do, you do it with class and quality but also whimsy."},

{id: 2, link: "https://www.youtube.com/watch?v=X7bFzR1CZQI", line: "'I love you like peaches / I love you like a blue sky / On a beautiful day'",  song: "Peaches", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "It's been 18 years of beautiful skies and moons, and you have this eye for really appreciating beauty and being able to recognize it"},

{id: 3, link: "https://www.youtube.com/watch?v=AzlMeTxVdH8", line: "'Oh Yoshimi they don't believe me / But you won't let those robots defeat me'", song: "Yoshimi Battles the Pink Robots Part 1", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "You're the type of person who picks themselves up and gets to where they need to be: you might have 18 years worth of bumps and hills to climb, but you've also had 18 years worth of hills that you've successfuly climbed over "},

{id: 4, link: "https://www.youtube.com/watch?v=0yBnIUX0QAE", line: "'When that moon is big and bright / It's a supernatural delight'", song: "Dancing in the Moonlight", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "delight!! thats a perfect description for you!! i love seeing you around the things that get you excited and passionate because there's just so much brightness and joy in you and it's so inspiring and invigorating and ah gah i love it."},

{id: 5, link: "https://www.youtube.com/watch?v=Clxtg2pFTQM", line: "'We count only blue cars skip the cracks in the street / And ask many questions like children often do'", song: "Counting Blue Cars", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "You're so extremely thoughtful and you have this love of learning and asking for its own sake, which is why conversations with you are always so engaging and lovely"},

{id: 6,link: "https://www.youtube.com/watch?v=t75iai3jYi4",  line: "'This one goes out to my closest friends / The ones who make me feel less alien'", song: "Another Night on Mars", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "you're a weird dude. you've done a lot of weird things. it's cool shit bro and it's good for the people around you."},

{id: 7, link: "https://www.youtube.com/watch?v=rg6-LqHbg2c", line: "'one by one we're haunting cafes / buying art picasso and monet / speaking words you learned in your spare time'", song: "Paris Song", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "bounjour! art museums, music class, phone in french, self-teaching the guitar, etcetc. you have this strong appreciation for culture (lol real culture not my version) and it makes you so !!!"},

{id: 8, link: "https://www.youtube.com/watch?v=pHNSGv5oFzQ", line: "'So help me through this hard times / Change these fault lines'", song: "Our Song", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "if birthdays are meant to recognize the things that you've done, i can't not include the impact that you've had on me. i have grown so much and pulled myself out of so many hard times because of your support. you already know that but i don't think i can ever emphasize it enough."},

{id: 9, link: "https://www.youtube.com/watch?v=9RAPtw_FkDo", line: "'I said, the stick shift push it to the up and right / We've been waiting but we're next in line'", song: "Next in Line", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "you are a badass driver and certified in dealing with asshat drivers!! 10,000 miles baby woohoo!! so many beautiful routes and i've had the privilege to take some of them with you, and i absolutely cannot wait for the next one :)"},

{id: 10, link: "https://www.youtube.com/watch?v=h1DRhUrSN7g", line: "'You'll find a blind man in Amsterdam with a box around his neck / And the music box keeps singing on and the song you won't forget'", song: "Blind Man in Amsterdam", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "It's the way that you treat people like lessons to learn from and how you bring both intellect and empathy to the interactions that you have."},

{id: 11, link: "https://www.youtube.com/watch?v=4LJx3b4iVJQ", line: "'And we won't place any stock in old days / Lets save up for something new'", song: "Novels", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "I wouldn't be surprised if you were an explorer in another life because you're always looking to try new things and always take the interesting option. you turn every day into a potential adventure!!"},

{id: 12, link: "https://www.youtube.com/watch?v=t-2dqMaf4-w", line: "'Got some cash, bought some wheels / Took it out, through some fields / Lost control, hit a wall / But we're alright'", song: "All Right", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "the essence of this and just how spontaneous and fun it is is just you. does that make sense? except since you're you you probably wouldn't hit anything. "},

{id: 13, link: "https://www.youtube.com/watch?v=izzY55ACUQo", line: "'You gotta story you never tell, down in the delta ringing bells, / I've never seen it, seen it'", song: "Supersoaker", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "you might not always be in the mood to talk. but whenever you do, it's always something that's so worth listening to and well said and your brain would fetch so much $$. but in all seriousness, i love listening to you speak and your words always speak volumes."},

{id: 14, link: "https://www.youtube.com/watch?v=QHp-j4XP6sc", line: "'Give me the eyes the ones that lit the fuse / The eyes that could lift up my feet off the ground, ground, ground'", song: "Wasted", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "i may have said this a thousand times before but i mean it more each time: you're so physically stunning and you just completely take my breath away, c. absurdly attractive."},

{id: 15, link: "https://www.youtube.com/watch?v=7kb_apGkNPs", line: "'Head full of bright ideas / Innocent until it's lit / Dreamin' of those skies we tripped'", song: "How's Your Mind", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "Crazy mad scientist brain!!! So many bright ideas and wild discussions and thought experiments and every time that you text me 'ok so' I get all excited in side because I know it's gonna be something goooodddd."},

{id: 16, link: "https://www.youtube.com/watch?v=oW-22suwJpw", line: "'They call it 'Hell', yeah / Why don't we go there? / It's way down below there / Let's make it our own'", song: "Hell Yeah", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "I hope I'm not getting repetitive, but you really do make everything your own. And also, 'hell yeah' reminds me of cheering which reminds me of you which reminds me of frisbee and the fact that goddamn 18 has left you looking beautiful & a total sight for the eyes!"},

{id: 17, link: "https://www.youtube.com/watch?v=Rcp8SE_FxBg", line: "'In the end nothing comes easy / So you find a way to take a little with you'", song: "Pelican", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "You have this way of making the most of everything and flipping every situation into something good and better. You've done and been through a lot and I know I'm going to be vague here but you bring so much valuable insight and you just have so much maturity for just 18 years and you're just a strong person. that's all."},

{id: 18, link: "https://www.youtube.com/results?search_query=next+year+two+door+cinema+club", line: "'Take to me to where you are, / What you've become, / And what you will do'", song: "Next Year", color: '#'+ Math.round(0xffffff * Math.random()).toString(16), text: "Because I've known you for four years and with each passing year you keep on growing into an even more incredible and accomplished and fundamentally decent person. All of the things that I say here may be in generic terms but you've objectively done so, so much and have so much to be proud of and it's crazy because you've packed about 60 years worth into the past 18. So just don't you ever forget that, okay?"}]

    function getRandomInRange(from, to) {
        return (Math.random() * (to - from) + from).toFixed() * 1;
    }
 
    var offsets = $('#center').offset();
    var top = offsets.top;
    var left = offsets.left;
    var right = left + $('#center').width();
    var bottom = $(window).height() - top - $('#center').height();
    var divsize = ((Math.random()*20) + 30).toFixed();

        var leftposx = getRandomInRange(0, left);
        var leftposy = getRandomInRange(0, $(document).height()- divsize);

        var topposx = getRandomInRange(left, right);
        var topposy = getRandomInRange(top, 0);

        var rightposx = getRandomInRange(right, $(document).width()- divsize);
        var rightposy = getRandomInRange(0, $(document).height()- divsize);

        var bottomposx = getRandomInRange(left, right);
        var bottomposy = getRandomInRange(1.5 * bottom, $(document).height());

    for (var i = 0; i < 6; i++) {
        makeDiv(leftposx, leftposy, divsize, values[i]);
         var leftposx = getRandomInRange(0, left);
        var leftposy = getRandomInRange(0, $(document).height()- divsize);
    }
     for (var i = 6; i < 12; i++) {
        makeDiv(rightposx, rightposy, divsize, values[i]);
         var rightposx = getRandomInRange(right, $(document).width()- divsize);
        var rightposy = getRandomInRange(0, $(document).height()- divsize);
    } 
     for (var i = 12; i < 16; i++) {
        makeDiv(topposx, topposy, divsize, values[i]);
         var topposx = getRandomInRange(left, right);
        var topposy = getRandomInRange(top, 0);
    }
     for (var i = 16; i < 19; i++) {
        makeDiv(bottomposx, bottomposy, divsize, values[i]);
         var bottomposx = getRandomInRange(left, right);
        var bottomposy = getRandomInRange(1.5 * bottom, $(document).height()- divsize);
    }

    function makeDiv(x, y, divsize, box) {
        
        var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
        $newdiv = $('<div/>').css({
            'width':divsize+'px',
            'height':divsize+'px',
            'background-color': color
        }).attr('id', box.id).attr('class', 'box').click(function() {
         var i = box.id;
        $('#infobox').css('opacity', '1');
        $('#infobox').css('border-color', box.color);
        
        $('#song').text(box.song);
        $('#song').attr("href", box.link);
        $('#lyrictext').text(values[i].line);
        $('#lyrictext').css('background-color', box.color);

          $('#texttext').text(values[i].text);
    
});
       
      
        // var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        // var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

            $newdiv.css({
                'position':'absolute',
                'left':x+'px',
                'top':y+'px'
            }).appendTo( 'body' );
    }


//     $('.box').click(function() {
//     var i = $(this).id;
//     console.log(i);
//     $('#infobox').css('opacity', 'none');
//     console.log(values[i]);
//     $('#lyrictext').text(values[i].line);
//       $('#texttext').text(values[i].text);
    
// });
});


// left side:
//  getRandomInRange(0, left)
// getRandomInRange(0, $(document).height())
// top side:
// right side:
// bottom side:
