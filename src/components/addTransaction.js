import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import ListItemText from '@material-ui/core/ListItemText';
// import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import CommentIcon from '@material-ui/icons/Comment';
// import CreateIcon from '@material-ui/icons/Create';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     // maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// const data=[{label:'This is dat of PS% which i bought recently',id:1,price:100,type:'invoice'},{label:'Bought monitor recently',id:2,price:200,type:'expense'}]
export default function AddTransactions() {
//   const classes = useStyles();
//   const [checked, setChecked] = React.useState([0]);

//   const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

  return (<p>hekko world</p>
    // <List className={classes.root}>
    //   {data.map((value) => {
    //     const labelId = `checkbox-list-label-${value.id}`;

    //     return (
    //       <ListItem key={value.id} role={undefined} dense button onClick={handleToggle(value)}>
    //         <ListItemIcon>
    //           <Checkbox
    //             edge="start"
    //             checked={checked.indexOf(value) !== -1}
    //             tabIndex={-1}
    //             disableRipple
    //             inputProps={{ 'aria-labelledby': labelId }}
    //           />🖊
    //         </ListItemIcon>
    //         <ListItemText id={labelId} primary={value.label} />
    //         <ListItemSecondaryAction>
    //           <IconButton edge="end" aria-label="comments">
    //             <CreateIcon fontSize='small'/>
    //           </IconButton>
    //         </ListItemSecondaryAction>
    //       </ListItem>
    //     );
    //   })}
    // </List>
  );
}
