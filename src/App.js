import { useState, useEffect } from 'react';
import { ContainerBot, Loading } from './components';
import { build_dictionary, clean_input, get_time } from './functions';
import data_responses from './data/data-responses';
import trainingPhrases from './data/data-pattern';

const brain = require('brain.js');
// const data_responses = require('./data/data-responses-old.json');
// const trainingPhrases = require('./data/data-patterns-old.json');

console.log(`data_responses`, data_responses);
console.log(`trainingPhrases`, trainingPhrases);




// <------------------------- index.js
// build dictionary
const dictionary = build_dictionary(trainingPhrases);

// prepare your training data
const trainingSet = trainingPhrases.map(dataSet => {
  const encodedValue = encode(dataSet.phrase);
  return { input: encodedValue, output: dataSet.result };
});

// train neural network
const model_network = new brain.NeuralNetwork();
// model_network.train(trainingSet);
// -------------------------> index.js



// <------------------------- functions.js
// encoding text to number format
function encode(phrase) {
  const phraseTokens = phrase.split(' ');
  const encodedPhrase = dictionary.map(word => phraseTokens.includes(word) ? 1 : 0);

  return encodedPhrase;
}
// -------------------------> functions.js



function App() {
  const [loading, setLoading] = useState(5);
  const [chats, setChats] = useState([{
    typ: true,
    msg: 'Hi, selamat datang :)',
    prb: null,
    tim: get_time(new Date()),
  }]);
  const [input_chat, setInput_chat] = useState('');



  // <------------------------- index.js
  // make a prediction
  function predict_bot(txt_chat_input) {
    // encode input text
    const encoded = encode(clean_input(txt_chat_input));

    // predict the response
    const json_output = model_network.run(encoded);
    console.log(`Max Categories: ${Object.values(json_output).length} intents.`);
    console.log(`json_output`, json_output);

    // get max value using apply
    const max = Math.max.apply(null, Object.values(json_output));
    const index = Object.values(json_output).indexOf(max);

    // get probability and pred_label
    const pred_label = Object.keys(json_output)[index];
		const pred_prob = json_output[''+pred_label];
		let pred_response="";
		for (let no in data_responses) {
			if(data_responses[no][''+pred_label] != null){
				pred_response = data_responses[no][''+pred_label];
			}
	  }
		console.log(`Predicted label (${pred_label}), probability (${pred_prob}).`);

		return [pred_response, pred_prob];
  }

  // compile/execute chatbot
  function run_chatbot() {
    if(input_chat.length === 0) {
      alert('Sorry, write your text chat first.');
    } else {
      const user = {
        typ: false,
        msg: input_chat,
        prb: null,
        tim: get_time(new Date()),
      };

      // predict response chatbot
      const [respond_bot, prob_bot] = predict_bot(input_chat);
      const prob_val = (parseFloat(prob_bot)*100).toFixed(2);
      const threshold = 50;

      if(prob_val > threshold) {
        setChats([...chats, user, {
          typ: true,
          msg: respond_bot,
          prb: prob_val,
          tim: get_time(new Date()),
        }]);
      } else {
        setChats([...chats, user, {
          typ: true,
          msg: 'Maaf, pertanyaan anda tidak dapat dimengerti.',
          prb: prob_val,
          tim: get_time(new Date()),
        }]);
      }

      // scroll bottom
      force_scroll_bottom();

      // set empty input
      setInput_chat('');
    }
  }

  // pressing Enter key
  function handleKeyDown(e) {
    if(e.key === 'Enter') {
      // compile chatbot brain.js
      run_chatbot();
    }
  }

  // handle button function
  function handleButtonSend() {
    // compile chatbot brain.js
    run_chatbot();
  }
  // -------------------------> index.js



  // force scrollbar to bottom
  function force_scroll_bottom() {
    const el = document.getElementById('content-chat-feed');
		if (el) {
			el.scrollTop = el.scrollHeight;
		}
  }



  // for loading
  useEffect(() => {
    model_network.train(trainingSet);

    setTimeout(() => (loading > 0) && setLoading(loading => loading - 1), 500);
  }, [loading]);

  // for updating chats
  useEffect(() => {
    console.log(`chats`, chats);
  }, [chats]);

  return (
    <div className='App'>
      { loading > 0 ? <Loading val={((5-loading) / 5)*100} /> : <div className='card d-flex flex-column vh-100 overflow-hidden'>
        <div className="card-header text-white bg-warning text-center"><b>Layanan Informasi Tempat Wisata di Indonesia</b></div>
				<div className='card-body' style={{overflowY:'scroll'}} id='content-chat-feed'>
          { chats.map((obj, index) => ContainerBot({...obj, index})) }
				</div> 
				<div className='card-footer'> 
					<div className='input-group'>
						<input type='text' className='form-control' id='input-chat' value={input_chat} onChange={e => setInput_chat(e.target.value)} onKeyDown={handleKeyDown} />
						<div className='input-group-append'>
							<button className='btn btn-warning' type='button' onClick={handleButtonSend}>Send</button>
						</div>
					</div>
				</div>
			</div> }
    </div>
  );
}

export default App;
