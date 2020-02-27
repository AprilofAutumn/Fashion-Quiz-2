const STORE = [
    {
      question: "<img src=\"Gucci.jpg\"/>",
      answers: {
        a: 'Prada',
        b: 'Gucci',
        c: 'Fendi',
        d: 'Hermes'
      },
      correctAnswer: "b"
    },
    {
      question: "<img src=\"Versace.jpg\"/>",
      answers: {
       a: 'Louis Vuitton',
       b: 'Carolina Herrera',
       c: 'Alexander Wang',
       d: 'Versace'
       },
      correctAnswer: "d"
    },
    {
      question:"<img src=\"DVF.jpg\"/>",
      answers: {
       a: 'Diane Von Furstenberg',
       b: 'Tory Burch',
       c: 'Stella McCartney',
       d: 'Moschino'
      },
      correctAnswer: "a"
    },
    {
   question:"<img src=\"Telfar.jpg\"/>",
      answers: {
        a: 'Pyer Moss',
        b: 'Off White',
        c: 'Telfar ',
        d: 'Chromat'
      },
      correctAnswer: "c"
    },
    {
     question:"<img src=\"LV-Speedy.jpg\"/>",
      answers: {
        a: 'Comme Des Garçons',
        b: 'Alexander Mcqueen',
        c: 'Louis Vuitton',
        d: 'Dior'
      },
      correctAnswer: "c"
    },
    {
    question: "<img src=\"Dior-New-Look.jpg\"/>" ,
      answers: {
        a: 'Miu Miu',
        b: 'Dior',
        c: 'Yves Saint Laurent',
        d: 'Chanel'
      },
      correctAnswer: "b"
    },
    {
     question: "<img src=\"MachxMach.jpg\"/>",
      answers: {
        a: 'Mach & Mach',
        b: 'Bande Noir',
        c: 'Kelsey Randall',
        d: 'Kalmanovich'
      },
      correctAnswer: "a"
    },
    {
     question:"<img src=\"AnnDemeulemeester.jpg\"/>",
      answers: {
        a: 'Comme des Garcons',
        b: 'Jil Sander',
        c: 'Dries Van Noten',
        d: 'Ann Demeulemeester' 
      },
      correctAnswer: "d"
    },
    {
     question: "<img src=\"Givenchy.jpg\"/>",
      answers: {
        a: 'Rick Owens',
        b: 'Vivienne Westwood',
        c: 'Givenchy',
        d: 'Prada'
      },
      correctAnswer: "c"
    },
    {
     question: "<img src=\"Pyer-Moss.jpg\"/>",
      answers: {
        a: 'Off White',
        b: 'Pyer Moss',
        c: 'Rick Owens',
        d: 'Gucci'
      },
      correctAnswer: "b"
    },
  ];
  //variables to hold score and question number//
  let currentQuestion = 0;
  let score = 0;
  
  
  //generate each question//
  function createQuestion() {
    if (currentQuestion < STORE.length) {
      return createThing(currentQuestion);
    } else {
      finalScore();
      $('.currentQuestion').text(10);
    }
  //increments the number value of the "score" variable by one
  //and updates the "score" number text in the quiz view//
  }
  function updateScore() {
    score++;
    $('.score').text(score);
  }
  
  //increments the number value of the "question number" variable by one
  //and updates the "question number" text in the quiz view
  function updateQuestionNumber() {
    currentQuestion++;
    $('.currentQuestion').text(currentQuestion + 1);
  }
  
  //resets the text value of the "question number" and "score" variables
  //and updates their respective text in the quiz view
  function resetStats() {
    score = 0;
    currentQuestion = 0;
    $('.score').text(0);
    $('.currentQuestion').text(0);
  }
  //begins the quiz
  function startQuiz(){
    $("#startQuiz").on('click','.startButton',function 
     (event) {
      $("#startQuiz").hide();
      $(".currentQuestion").text(1);
      $('.text-box').show();
      $('.text-box').prepend(createQuestion());
    });
  }
  //submits a selected answer and checks it against the correct answer
  //runs answer functions accordingly
  function submitAnswer() {
    $('.text-box').on('submit', function (event) {
      event.preventDefault();
      //$('.text-box').hide();
      //$('.tex').show();
      let selected = $('input:checked');
      let answer = selected.val();
      let correct = STORE[currentQuestion].correctAnswer;
      if (answer === correct) {
        correctAnswer();
      } else {
        wrongAnswer();
      }
    });
  }
  //HTML for Question Form
  function createThing(questionIndex) {
    let createForm = $(`<form>
      <fieldset>
        <legend class="questionText">${STORE[questionIndex].question}</legend>
      </fieldset>
    </form>`)
    let fieldSelector = $(createForm).find('fieldset');
  
    STORE[questionIndex].answers.forEach(function(answerValue, answerIndex) {
      $(`<label class="sizeMe" for="${answerIndex}">
          <input class="radio" type="radio" id="${answerIndex}" value="${answerValue}" name="answer" required>
          <span>${answerValue}</span>
        </label>
        `).appendTo(fieldSelector);
    });
    $(`<button type="submit" class="submitButton button"> Submit</button > `).appendTo(fieldSelector);
    return formMaker;
  }
  
   function correctAnswer() {
    $('.text-box').html(
      `<h3>Your answer is correct!</h3>
        <button type="button" class="nextButton button">Next</button>`
    );
    updateScore();
  }
  
   function wrongAnswer() {
    $('.text-box').html(
      `<h3>That's the wrong answer...</h3>
      <p class="sizeMe">It's actually:</p>
      <p class="sizeMe">${STORE[currentQuestion].correctAnswer}</p>
      <button type="button" class="nextButton button">Next</button>`
    );
  }
  
  function nextQuestion() {
    $('.text-box').on('click', '.nextButton', function (event) {
      //$('.picture-box').hide();
      $('.text-box').show();
      updateQuestionNumber();
      $('.text-box form').replaceWith(createQuestion());
    });
  }
  
  function finalScore() {
    $('.text-box').show();
  
    const great = [
      'Great job!',
      'You sure know a lot about fashion!'
    ];
  
    const good = [
      'Good, not great.',
      'Good job but keep studying...'
    ];
  
    const bad = [
      'Do you care about fashion?',
    ];
  
    if (score >= 8) {
      array = great;
    } else if (score < 8 && score >= 5) {
      array = good;
    } else {
      array = bad;
    }
    return $('.text-box').html(
      `<h3>${array[0]}</h3>
        <img src="${array[1]}" alt="${array[2]}" class="images">
          <h3>Your score is ${score} / 10</h3>
          <p class="sizeMe">${array[3]}</p>
          <button type="submit" class="restartButton button">Restart</button>`
    );
  }
  function restartQuiz() {
    $('.picture-box').on('click','.restartButton', function (event) {
      event.preventDefault();
      resetStats();
      $('.box').hide();
      $('.startQuiz').show();
    });
  }
  
  function makeQuiz() {
      startQuiz();
      submitAnswer();
      nextQuestion();
      restartQuiz();
  }
  
  $(makeQuiz);