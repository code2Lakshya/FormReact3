import './App.css';
import { useState } from 'react';
import countries from './data'

function App() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: 'Japan',
    address: '',
    city: '',
    state: '',
    comments: false,
    candidates: false,
    offers: false,
    zip:'',
    sms: ''
  });
  function changeHandler(e) {
    setFormData(prevdata => {
      return {
        ...prevdata,
        [e.target.name]: (e.target.name === 'comments' || e.target.name === 'candidates' || e.target.name === 'offers') ? e.target.checked : e.target.value
      }
    })
  }
  function submitHandler(e){
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts',{ method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }})
    .then(response => response.json())
    .then(data => console.log(data))
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      country: 'Japan',
      address: '',
      city: '',
      state: '',
      comments: false,
      candidates: false,
      offers: false,
      zip:'',
      sms: ''
    });
  }
  return (
    <div className='App'>
    <h1> Form</h1>
      <form onSubmit={submitHandler}>

        <label htmlFor='first-name'>First Name</label>
        <input type='text'
          name='firstName'
          value={formData.firstName}
          onChange={changeHandler}
          id='first-name'
          placeholder='Lakshya'
        />
        <br />

        <label htmlFor='lastName'>Last Name</label>
        <input type='text'
          name='lastName'
          value={formData.lastName}
          onChange={changeHandler}
          id='last-name'
          placeholder='Sadhwani'
        />
        <br />

        <label htmlFor='email'>Email Address</label>
        <input type='email'
          name='email'
          value={formData.email}
          onChange={changeHandler}
          id='email'
          placeholder='abc@gmail.com'
        />
        <br />

        <label htmlFor='countrySelect'>Country</label>
        <select id='countrySelect'
          name='country'
          value={formData.country}
          onChange={changeHandler}
        >
          {
            countries.map((country, index) => {
              return <option value={country} key={index}>{country}</option>
            })
          }
        </select>
        <br />

        <label htmlFor='street-address'>Street Address</label>
        <input type='text'
          name='address'
          value={formData.address}
          id='street-address'
          onChange={changeHandler}
          placeholder='123 Main St'
        />
        <br />

        <label htmlFor='city'>City</label>
        <input type='text'
          name='city'
          value={formData.city}
          onChange={changeHandler}
          id='city'
          placeholder='Gorakhpur'
        />
        <br />

        <label htmlFor='state'>State/Provience</label>
        <input type='text'
          name='state'
          value={formData.state}
          id='state'
          onChange={changeHandler}
          placeholder='Uttar Pradesh'
        />
        <br />

        <label htmlFor='zip'>Zip/Postal Code</label>
        <input type='number'
          id='zip'
          name='zip'
          value={formData.zip}
          onChange={changeHandler}
          placeholder='273001'
        />
        <br />
    
        <label>By Email</label>
        <fieldset>
        <input
          type='checkbox'
          name='comments'
          checked={formData.comments}
          id='comments'
          onChange={changeHandler}
        />
        <label htmlFor='comments'>Comments</label>
        <p>Get notified when someone posts a comment on posting.</p>
        <br />

        <input type='checkbox'
          name='candidates'
          id='candidates'
          checked={formData.candidates}
          onChange={changeHandler}
        />
        <label htmlFor='candidates'>Candidates</label>
        <p>Get notified when a candidate applies for a job.</p>
        <br />

        <input
          type='checkbox'
          id='offers'
          name='offers'
          checked={formData.offers}
          onChange={changeHandler}
        />
        <label htmlFor='offers'>Offers</label>
        <p>Get notified when a candidate rejects or accepts an offer.</p>
        </fieldset>
        <br/>

        <label>Push Notifications</label>
        <p>These are delivered via SMS to your mobile phone</p>

        <fieldset>
        <input type='radio'
          name='sms'
          value='Everything'
          id='radio1'
          checked={formData.sms === 'Everything'}
          onChange={changeHandler}
        />
        <label htmlFor='radio1'>Everything</label>
        <br/>

        <input
          type='radio'
          name='sms'
          value='same as email'
          id='radio2'
          checked={formData.sms==='same as email'}
          onChange={changeHandler}
        />
        <label htmlFor='radio2'>Same as Email</label>
        <br/>

        <input type='radio'
        name='sms'
        value='No push Notifications'
        id='radio3'
        checked={formData.sms==='No push Notifications'}
        onChange={changeHandler}
        />
        <label htmlFor='radio3'>No push Notifcations</label>
        <br/>
        </fieldset>

        <input type='submit'/>
      </form>
    </div>
  );
}

export default App;
