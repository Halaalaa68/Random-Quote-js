var arr=['“Be yourself; everyone else is already taken.”</br>― Oscar Wilde',`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”</br>― Marilyn Monroe`,`“So many books, so little time.”</br>― Frank Zappa`,`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”</br>― Albert Einstein`,`“A room without books is like a body without a soul.”</br>― Marcus Tullius Cicero`,`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”</br>― Bernard M. Baruch`,`“You've gotta dance like there's nobody watching,</br>Love like you'll never be hurt,</br>Sing like</br>there's nobody listening,</br>And live like it's heaven on earth.”</br>― William W. Purkey`,`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”</br>― Dr. Seuss`,`“You only live once, but if you do it right, once is enough.”</br>― Mae West`,`“Be the change that you wish to see in the world.”</br>― Mahatma Gandhi`,`“In three words I can sum up everything I've learned about life: it goes on.”</br>― Robert Frost`,`“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”</br>― J.K. Rowling, Harry Potter and the Goblet of Fire`,`“Don’t walk in front of me… I may not follow</br>Don’t walk behind me… I may not lead</br>Walk beside me… just be my friend”</br>― Albert Camus`,`“If you tell the truth, you don't have to remember anything.”</br>― Mark Twain`,`“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”</br>― C.S. Lewis, The Four Loves`,`“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”</br>― Maya Angelou`,`“A friend is someone who knows all about you and still loves you.”</br>― Elbert Hubbard`,`“To live is the rarest thing in the world. Most people exist, that is all.”</br>― Oscar Wilde`,`“Always forgive your enemies; nothing annoys them so much.”</br>― Oscar Wilde`,`“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”</br>
― Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches`,`“Live as if you were to die tomorrow. Learn as if you were to live forever.”</br>― Mahatma Gandhi`,`“We accept the love we think we deserve.”</br>― Stephen Chbosky, The Perks of Being a Wallflower`];

var demoElement=document.getElementById("demo");
var num=0;
var num2=0;
// console.log(arr.length)

function quote(){
    num= Math.floor(Math.random()*22);
    while(num===num2) 
        {
            num= Math.floor(Math.random()*22);
        }
    num2=num;
    demoElement.innerHTML= arr[num2]
}