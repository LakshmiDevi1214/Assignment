function reverseWords(sentence) {
      const reversedSentence = sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
       const numbers = [5, 2, 9, 1, 5, 6];
         const sortedDescending = numbers.sort((a, b) => b - a);
         console.log("Reversed Sentence: " + reversedSentence);
     }
     const inputSentence = "This is a sunny day";
     reverseWords(inputSentence);
    