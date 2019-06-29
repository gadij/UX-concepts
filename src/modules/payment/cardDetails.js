import React from 'react';
import PropTypes from 'prop-types';

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
            <section className="content">
                <label>
                    Credit card number:
                    </label>
                <input type="text" name="cardNumber" value={cardNumber} onChange={onCardNumberChange} />
            </section>
            <section className="content">
                <label>
                    Valid:
                    </label>
                <input type="text" name="valid" value={valid} onChange={onValidChange} />
            </section>
            <section className="content">
                <label>
                    cvv:
                    </label>
                <input type="text" name="cvv" value={cvv} onChange={onCvvChange} />
            </section>
        </div>
    )
}

CardDetails.propTypes = {
    onPaymentDetailsChange: PropTypes.func,
    paymentDetails: PropTypes.shape({
        cardNumber: PropTypes.string,
        valid: PropTypes.string,
        cvv: PropTypes.string
    })
}

export default CardDetails;