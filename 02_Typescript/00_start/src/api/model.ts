export class CardContentDTO {
  public title: string;
  public subtitle: string;
  public footer: string;

  public constructor() {
      this.title = '';
      this.subtitle = '';
      this.footer = '';
  }
}

export class QuestionDTO {
  public category: string;
  public type: boolean | string [];
  public difficulty: string;
  public question: string;
  public correct_answer: string;
  public incorrect_answers: string[];
  public answer_gived: string;
  public question_number: number;
 
  public constructor() {
      this.category = '';
      this.type = true;
      this.question = '';      
      this.incorrect_answers = [];
      this.correct_answer = '';       
      this.difficulty = '';
      this.answer_gived = '';
      this.question_number = 0;
  }
}
