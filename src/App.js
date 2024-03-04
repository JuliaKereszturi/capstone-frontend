
import './App.css';
import Button from './components/button/buttons.js';
import InputField from './components/input_fields/input_fields.js';

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 13h-8v-2h8v2zm0-3h-8V7h8v5z" />
  </svg>
);

function App() {

  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
<>
  <div className="App flex mt-12 border-8 w-1/2 ">
        <div className="flex flex-row justify-between items-center"> {/* Container for header */}
          <h1 className='mr-2 pr-4 border-r-4'>COMING SOON PAGE</h1>
          <h2 className='border-l -8 flex-row-reverse'>test</h2>
        </div>
    </div>

      <div className="flex flex-col mt-5 space-y-4"> {/* Container for buttons */}
          <Button variant="primary" onClick={handleClick}>
            Primary Button
          </Button>
          <Button variant="secondary" onClick={handleClick}>
            Secondary Button
          </Button>
          <Button variant="secondary" disabled>
            Disabled Button
          </Button>
          <Button variant="secondary" onClick={handleClick} icon={<Icon />}>
            Button with Icon
          </Button>
      </div>

      <InputField
  label="Username"
  type="text"
  placeholder="Enter your username"
  required
  minLength={3}
  successMessage="Username is available!"
/>

<InputField
  label="Email"
  type="email"
  placeholder="Enter your email address"
  required
  pattern={/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/}
  successMessage="Email format is valid!"
/>

<InputField
  label="Custom Validation"
  type="text"
  placeholder="Starts with 'A'"
  customValidation={value => value.startsWith('A')}
  successMessage="Input is valid!"
/>


  </>
  );
}

export default App;
