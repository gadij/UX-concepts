import React from 'react';

const CardDetails = ({onPaymentDetailsChange, paymentDetails: {cardNumber, valid, cvv }}) => {

    const handlePaymentDetailsChange = (type, value) => {
        onPaymentDetailsChange({[type]: value});
    };

    const onCardNumberChange = (event) => {
        handlePaymentDetailsChange('cardNumber', event.target.value);
    };

    const onValidChange = (event) => {
        handlePaymentDetailsChange('valid', event.target.value);

    };

    const onCvvChange = (event) => {
        handlePaymentDetailsChange('cvv', event.target.value);
    };
    return (
        <div className='card-container'>
            <div className="content">
                <label>
                    Credit card number:
                    </label>
                <input type="text" name="cardNumber" value={cardNumber} onChange={onCardNumberChange} />
            </div>
            <div className="content">
                <label>
                    Valid:
                    </label>
                <input type="text" name="valid" value={valid} onChange={onValidChange} />
            </div>
            <div className="content">
                <label>
                    cvv:
                    </label>
                <input type="text" name="cvv" value={cvv} onChange={onCvvChange} />
            </div>
        </div>
    )
}

export default CardDetails;