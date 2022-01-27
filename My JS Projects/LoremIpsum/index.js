const arr = [
  "The song came from the bathroom belting over the sound of the shower's running water. It was the same way each day began since he could remember. It listened intently and concluded that the singing today was as terrible as it had ever been.",
  "You know that tingly feeling you get on the back of your neck sometimes? I just got that feeling when talking with her. You know I don't believe in sixth senses, but there is something not right with her. I don't know how I know, but I just do.",

  "He wondered if he should disclose the truth to his friends. It would be a risky move. Yes, the truth would make things a lot easier if they all stayed on the same page, but the truth might fracture the group leaving everything in even more of a mess than it was not telling the truth. It was time to decide which way to go.",

  "Terrance knew that sometimes it was simply best to stay out of it. He kept repeating this to himself as he watched the scene unfold. He knew that nothing good would come of him getting involved. It was far better for him to stay on the sidelines and observe. He kept yelling this to himself inside his head as he walked over to the couple and punched the man in the face.",

  "Was it enough? That was the question he kept asking himself. Was being satisfied enough? He looked around him at everyone yearning to just be satisfied in their daily life and he had reached that goal. He knew that he was satisfied and he also knew it wasn't going to be enough.",
  "The bowl was filled with fruit. It seemed to be an overabundance of strawberries, but it also included blueberries, raspberries, grapes, and banana slices. This was the meal Sarah had every morning to start her day since she could remember. Why she decided to add chocolate as an option today was still a bit of a surprise, but she had been in the process of deciding she wanted to change her routine. This was a baby step to begin that start.",
  "What were the chances? It would have to be a lot more than 100 to 1. It was likely even more than 1,000 to 1. The more he thought about it, the odds of it happening had to be more than 10,000 to 1 and even 100,000 to 1. People often threw around the chances of something happening as being 1,000,000 to 1 as an exaggeration of an unlikely event, but he could see that they may actually be accurate in this situation. Whatever the odds of it happening, he knew they were big. What he didn't know was whether this happening was lucky or unlucky.",
  "The box sat on the desk next to the computer. It had arrived earlier in the day and business had interrupted her opening it earlier. She didn't who had sent it and briefly wondered who it might have been. As she began to unwrap it, she had no idea that opening it would completely change her life.",

  "Twenty seconds were all that was left and Richard could hear each one tick by. Fifteen seconds now remained and the panic began to fully set in. Ten seconds and he wasn't sure he had enough time. Five seconds, four, three, two, one...",
];
const form = document.querySelector(".form");
const para = document.querySelector(".para");
const text = document.querySelector(".paragraph");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let noOfPara = parseInt(para.value); //name.value can be used to access the value from the input

  if (isNaN(noOfPara) || noOfPara <= 0 || noOfPara > 9) {
    noOfPara = Math.floor(Math.random() * 9);
    text.innerHTML = `<p class="par">${arr[noOfPara]}</p>`;
  } else {
    let tempText = arr.slice(0, noOfPara); //slice(start,end)->start is included whereas end is excluded
    tempText = tempText
      .map(function (item) {
        return `<p class="par">${item}<p>`; //returns an array passed through a function
      })
      .join(""); //joins elements of an array with the specified separator
    text.innerHTML = tempText;
  }
});
