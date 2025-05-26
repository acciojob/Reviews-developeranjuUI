import React from 'react';
import Review from './Review';
import './../styles/App.css';

const App = () => {
    return (
        <div id='main'>
            <main>
                <section className='container'>
                    <h2 id='review-heading'>Our Reviews</h2>
                    <Review />
                </section>
            </main>
        </div>
    )
}

export default App;