import Button from '@mui/material/Button';
export const Register1 = () => {
    const onHomePageButtonClick = () => {
        alert (" contact details ");
    }
    return (
    <div>
    <div>Contact page🏠</div>
        <Button variant="contained" onClick={onHomePageButtonClick}>
            Contact details
        </Button>
    </div>
    )
};