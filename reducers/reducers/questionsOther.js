const initialState = {
	questionswh:[],
	tempQuestionswh:[],
	allQuestions:[],
	checkedQuestions:[],
	i:0
};
const normaliseItems=(data)=> {

	let map = [];

	data.forEach((item, i)=> map[i]= item);
	// console.log("map", map)
	return map;
}
export default function app(state = initialState, action) {
	switch (action.type) {
		case "EDIT_LOCAL_QUESTION_OTHER":	
			return {
				...state, 
				tempQuestionswh: state.tempQuestionswh.map(q=>q.tid==action.question.tid?{...q, question:action.question.question, options:action.question.options}:q)
			}
		case "DELETE_LOCAL_QUESTION_OTHER":
			return {...state, tempQuestionswh:state.tempQuestionswh.filter(q=>q.tid!==action.question.tid)}
		case "GET_QUESTIONS_OTHER":
			return Object.assign({}, state, 
				{questionswh:normaliseItems(action.res.data.data), 
					allQuestions:state.allQuestions.length==0?normaliseItems(action.res.data.data):state.allQuestions
				});
		case "CREATE_QUESTION_OTHER":
			return Object.assign({},
				state, 
				{tempQuestionswh:[...state.tempQuestionswh, {tid:`${state.i+1}`, question:action.question, options:action.answers}],
				allQuestions:[...state.questionswh, ...state.tempQuestionswh,{question:action.question, options:action.answers} ], i:state.i+1}
			 )
		case "GET_CHECKED_QUESTIONS_OTHER":
			return {...state, checkedQuestions:normaliseItems(action.res.data.data)}
	default:
    	return state;
	}
}