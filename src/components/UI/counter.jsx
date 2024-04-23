import $ from 'jquery';
import React from "react";

function Counter(props) {
	$('.counter-count').each(function () {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {

			//chnage count up speed here
			duration: 6000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
	return (
		<>
			<div className="count-block">
				<span className="counter-count">12</span>
				<p className='count-name'>Years Of Experiance</p>
			</div>
			<div className="count-block ">
				<p className="counter-count">85</p>
				<p className='count-name'>Success Project</p>
			</div>
			<div className="count-block">
				<p className="counter-count">15</p>
				<p className='count-name'>Active Project</p>
			</div>
			<div className="count-block">
				<p className="counter-count">95</p>
				<p className='count-name'>Happy CUstomers</p>
			</div>
		</>
	)
}

export default Counter;