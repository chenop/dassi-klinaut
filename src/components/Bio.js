import React, {Fragment} from 'react';
import styled from "@emotion/styled";

const Text = styled.div`
    font-size: 16px;
    line-height: 40px;
`;
const Bio = () => {
    return (
    	<ul>
			<li><Text>מתמחה באבחון וטיפול בילדים בגילאים 3 עד 6.</Text></li>
			<li><Text>בוגרת תואר ראשון בקלינאות תקשורת</Text></li>
			<li><Text> בעלת הסמכה בהתפתחות הילד</Text></li>
			<li><Text>מטפלת בקשיי תקשורת, שפה והיגוי</Text></li>

		</ul>
    );
};

export default Bio;
