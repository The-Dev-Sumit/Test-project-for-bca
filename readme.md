mongoose.connect("mongodb://localhost:27017/testdb");

const usersSchema = mongoose.Schema({
  username: String,
  password: String,
  datecreated: {
    type: Date,
    default: Date.now()
  }
});

const db = mongoose.connection;


db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB!');
  // Your application logic here
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected!');
});

db.on('reconnected', () => {
  console.log('MongoDB reconnected!');
});

db.on('close', () => {
  console.log('MongoDB connection closed!');
});



usersSchema.plugin(passportLocalMongoose);

<i class="fa-regular fa-eye" onclick = "hideNSeek()" > </i>

<div id="eyeHide" ><i class="fa-regular fa-eye-slash"></i></div>

router.get('/register', function(req, res) {
  res.render('register', { message: req.flash('error'),
  msgSuccess: req.flash('success')
   });
});

gsap spliting
const gsap = require('gsap');
const splitTitle = require('split-text-js');
const h2_text = document.querySelectorAll('h2');


const title = gsap.utils.toArray(h2_text);
const t_Time = gsap.timeline();

title.forEach(title => {
    const split = new splitTitle(title);
    
    t_Time.from(split.chars, {
        opacity: 0,
        y: 80,
        rotateX: -90,
        stagger: .02,
    }, '<1')

        .to(split.chars, {
            opacity: 0,
            y: -80,
            rotateX: 90,
            stagger: .02,
        }, '<1');

})



.text-wrapper{
    height: 6vh;
    display: flex;
    margin-left: 20vw;
    margin-top: 2.8rem;
    flex-direction: column;
    text-align: center;
    overflow: hidden;
    border: none;
}

.text-wrapper h2{
    position: relative;
    animation: animate 5s infinite alternate  ;
}

@keyframes animate{
    0%,100%{
        top: 0;
    }
    10%{
        top: -50px;
    }
    20%{
        top: -100px;
    }
    
    30%{
        top: -150px;
    }
   
    40%{
        top: -200px;
    }
    50% {
        top: -250px;
        }
    60% {
        top: -300px;
        }
    70%{
        top: -350px;
    }
    
    80%{
        top: -400px;
    }
    90%{
        top: -450px;
    }
   
}

/*content.addEventListener('mouseover', () => {
    handCursor.style.display = 'block';
});

content.addEventListener('mouseout', () => {
    handCursor.style.display = 'none';
});

document.addEventListener('mousemove', (e) => {
    var x = e.clientX;
    var y = e.clientY;

    var xOffset = 2;  // Example: Change this value
    var yOffset = 2;  // Example: Change this value

    handCursor.style.top = (y-yOffset) + 'px';
    handCursor.style.left = (x- xOffset) + 'px';
})

document.addEventListener('mouseenter', () => {
    handCursor.style.display = 'block'
})

document.addEventListener('mouseleave', () => {
    handCursor.style.display = 'none'
})*/



let testKey = 202;

if (testKey === 202) {
    test.style.display = "none";
    start.addEventListener("click", () => {
    startTest();
}); 
        start.style.display = "none";
        testKey = 102;
    } else {
        test.style.display = "block";
}

document.querySelectorAll("#a").addEventListener("click",() => {
    window.location.href = "/overview/no-content";
});