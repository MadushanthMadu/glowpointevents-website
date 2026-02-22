import { Button, useTheme } from "@mui/material";

const CustomButton = ({
    label,
    onClick,
    variant="contained", // contained, outlined, text
    startIcon=null,
    endIcon=null,
    disabled=false,
    sx
}) => {
    const theme = useTheme();

    return (
        <>
            <Button 
                variant={variant}
                startIcon={startIcon}
                endIcon={endIcon}
                onClick={onClick}
                disabled={disabled}
                sx={{
                    textTransform: 'none',
                    borderRadius: '50px',
                    fontSize: {xs: '12px', md: '14px', lg: '16px'},
                    color: theme.palette.primary.contrastText,
                    '&: hover': {
                        transform: 'scale(0.95)'
                    },
                    py: '12px',
                    ...sx
                }}
            >
                {label}
            </Button>
        </>
    );
}

export default CustomButton;