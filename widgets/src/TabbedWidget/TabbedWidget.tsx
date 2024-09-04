import { useState } from 'react';
import './tabbed-widget.css';
import Component1 from './Component1';
import Component3 from './Component3';
import Component2 from './Component2';



function TabbedWidget() {

    const [activeIndex, setActiveIndex] = useState(0);

    const TABBUTTON = 'tab-button';

    const clickHandler = (event) => {
        const buttons = document.querySelectorAll(`.${TABBUTTON}`);
        buttons.forEach(button => button.classList.remove('active'));
        // Az aktuális elem aktívvá tétele
        const currentButton = event.currentTarget;
        currentButton.classList.add('active');
        const activeindex = Array.from(buttons).findIndex(item => item === currentButton)

        // const tabContents = document.querySelectorAll('.tabbed-content .tab-content')
        // tabContents.forEach(item => item.classList.remove('active'));
        // tabContents[activeindex].classList.add('active');

        setActiveIndex(activeindex);

        // További műveletek itt
        //console.log('Clicked:', currentButton);
    }


    return (
        <div className="tabbed-widget">
            <h2>Tabbed widget</h2>
            <div className="tabbed-buttons">
                <div className={`${TABBUTTON} active`} onClick={ev => clickHandler(ev)}>
                    <i>i</i>
                    <h4>Button 1</h4>
                    <p>Valamilyen felirat</p>
                    <div className="tab-button-footer">
                        <p>footer</p>
                    </div>
                </div>
                <div className={TABBUTTON} onClick={ev => clickHandler(ev)}>
                    <i>i</i>
                    <h4>Button 2</h4>
                    <div className="tab-button-footer">
                        <p>footer</p>
                    </div>
                </div>
                <div className={TABBUTTON} onClick={ev => clickHandler(ev)}>
                    <i>i</i>
                    <h4>Button 3</h4>
                    <div className="tab-button-footer">
                        <p>footer</p>
                    </div>
                </div>
            </div>
            <div className="tabbed-content">
                {activeIndex === 0 && <Component1 />}
                {activeIndex === 1 && <Component2 />}
                {activeIndex === 2 && <Component3 />}
                {/*
                <div className="tab-content active">Content 1</div>
                <div className="tab-content">Content 2</div>
                <div className="tab-content">Content 3</div>
                */}
            </div>
        </div >
    )
}

export default TabbedWidget;
