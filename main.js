const correctAnswers = ['B','B','B','B'];
const form = document.querySelector('form');
const result = document.querySelector('#result');

//submit button
form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;

    const userAnswers = [form.options.value,form.options2.value,form.options3.value,form.options4.value];

    userAnswers.forEach((answer,index) => {
        // console.log(`Question ${index + 1}'s answer is ${answer}`);

        if(answer === correctAnswers[index]){
            score += 25;
        } else{
            score += 0
        }
    });

    scrollTo(0,0);
   
    result.classList.remove('hidden');

    // score animation
    let output = 0;
    const timer = setInterval(()=>{
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else{
            output++;
        }
    },10);
});

// reset button
form.addEventListener('reset', () => {
    scrollTo(0,0);
    result.classList.add('hidden'); 
});

