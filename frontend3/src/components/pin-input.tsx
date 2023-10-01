import * as React from 'react'
import { usePinInput, PinInputActions } from 'react-pin-input-hook'
import { useNavigate } from "react-router-dom";
import "./pin-input.css"
import SlideButton from './slider-button';

interface PinInputProps {
  onSlideContinue: () => void;
}


function PinInput ({onSlideContinue }: PinInputProps)  {
  let [values, setValues] = React.useState(['', '', '', '', '', ''])
  const [error, setError] = React.useState(false)
  const actionRef = React.useRef<PinInputActions>(null)
  const { fields } = usePinInput({
    values,
    onChange: setValues,
    error,
    actionRef,
  })
  let navigate = useNavigate();


  const onSubmit = () => {
    // Check if there is at least one empty field. If there is, the input is considered empty.
    if (values.includes('')) {
      // Clear the values array to ['', '', '', '', '', '']
      setValues(['', '', '', '', '', '']);
      // Setting the error.
      setError(true)
      // We set the focus on the first empty field if `error: true` was passed as a parameter in `options`.
      actionRef.current?.focus()
    }
    else if (JSON.stringify(values) === JSON.stringify(['5', '1', '2', '8', '4', '4'])) {
      setError(false);
     // Call the onSlideContinue function to navigate to the next page
     onSlideContinue();
    }
  }
  const onVerify = () => {
    if (!error) {
      // Navigate to the next page using the onSlideContinue prop
      onSlideContinue();
    }
  
  }
  

  return (
    <form className='form'>
      <div className='pin-input'>
        {fields.map((propsField, index) => (
          <input key={index} className='pin-input__field' {...propsField} />
        ))}
      </div>

      <div className='slider'>
        <SlideButton unlockThreshold={100} onUnlock={onSubmit} goNext={onVerify}/>
        </div>

    </form>
  );
};
export default PinInput;
