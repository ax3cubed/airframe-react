import React from 'react';
import PropTypes from 'prop-types';

const FooterText = (props) => (
	<React.Fragment>
		&quot;{ props.name }&quot; (C) { props.year } All Rights Reserved.  
		 {'                                                                        '}
		<a
			href="http://itrend.fun"
			target="_blank"
			rel="noopener noreferrer"
			className="sidebar__link"
		>
			itrend.fun
		</a>
	</React.Fragment>
)
FooterText.propTypes = {
    year: PropTypes.node,
	name: PropTypes.node,
	desc: PropTypes.node,
};
FooterText.defaultProps = {
    year: "2020",
    name: "iTrend",
    desc: " "
};

export { FooterText };
