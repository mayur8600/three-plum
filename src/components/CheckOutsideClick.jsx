import { useEffect, useRef } from 'react'

function CheckOutsideClick(props) {
    const { onClickOutside, children } = props;
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref?.current && !ref?.current?.contains(event?.target)) {
            onClickOutside();
        };
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        };
    }, [ref]);

    return (
        <div ref={ref}>{children}</div>
    )
}

export default CheckOutsideClick