import Button from '@mui/material/Button';
export const Homepage = () => {
    const onHomePageButtonClick = () => {
        alert ("Hello from react world ");
    }
    return (
    <div>
        
    <div>Home page🏠</div>
        <Button variant="contained" onClick={onHomePageButtonClick}>
            Hello World
        </Button>
    </div>
    )
};