import React from 'react';
import styled from "@emotion/styled";
import {Typography} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		fontSize: 22
	},
});

const Text = ({children}) => {
	const classes = useStyles();
    return (
        <Text0 classes={{body1: classes.root}}>
			{children}
        </Text0>
    );
};

const Text0 = styled(Typography)`
    font-size: 36px;
    line-height: 40px;
`;

const Wrapper = styled.div`
    margin: 20px 40px;
    overflow-y: scroll;
`;

const Line = ({text}) => {
    return (
		<ListItem><ListItemIcon><ChevronLeftIcon /></ListItemIcon><Text variant={"h6"}>{text}</Text></ListItem>
    );
};

const Bio = () => {
    return (
		<Wrapper>
			<Text>נעים להכיר 🙂</Text>
			<Text>
				שמי הדס, נשואה ואמא לשלושה.
			</Text>
			<Text>
				קלינאית תקשורת התפתחותית, בעלת ניסיון באבחון וטיפול בפעוטות וילדים עם קשיי תקשורת, שפה ודיבור.
			</Text>
			<Text>
				''כל ילד הוא עולם ומלואו'' .. מזג הילד, תחומי העניין שלו וסגנון המשחק הם רק חלק מהמאפיינים שמייחדים כל
				ילד וילד.
			</Text>
			<Text>
				בטיפול ניתנת חשיבות רבה לעבודה תוך חיבור והתאמה לעולמו של המטופל מתוך כוונה לגייסו להליך
				הטיפולי.
			</Text>
			<Text>
			לא פחות חשוב מהמטופל, עומדת משפחתו.
			</Text>
			<Text>
				במהלך שנות עבודתי, נוכחתי לגלות את חשיבות יצירת הקשר והתקשורת עם משפחת המטופל ורואה בשיח גלוי ועבודה
				משותפת חשיבות עליונה וחלק בלתי נפרד מהצלחת הטיפול.
			</Text>
			<Text>
				אשמח לעזור, מוזמנים לתקשר 😉
			</Text>
		</Wrapper>

    );
};

export default Bio;
