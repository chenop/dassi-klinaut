import React, {Fragment} from 'react';
import styled from "@emotion/styled";
import {ListItemText, Typography} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const Text = styled(Typography)`
    font-size: 30px;
    line-height: 40px;
`;

const Line = ({text}) => {
    return (
		<ListItem><ListItemIcon><ChevronLeftIcon /></ListItemIcon><Text variant={"h6"}>{text}</Text></ListItem>
    );
};

const Bio = () => {
    return (
    	<List>
			<Line text="מתמחה באבחון וטיפול בילדים בגילאים 3 עד 6." />
			<Line text="בוגרת תואר ראשון בקלינאות תקשורת" />
			<Line text="בעלת הסמכה בהתפתחות הילד" />
			<Line text="מטפלת בקשיי תקשורת, שפה והיגוי " />
		</List>
    );
};

export default Bio;
