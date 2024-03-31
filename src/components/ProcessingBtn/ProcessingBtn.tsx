import LoadingIcon from "../LoadingIcon/LoadingIcon";
import "./ProcessingBtn.scss";

export default function ProcessingBtn({
    label,
    isLoading,
    onClick,
    className,
}: {
    label: string;
    isLoading: boolean;
    onClick: () => void;
    className?: string;
}) {
    return (
        <button
            className={`processing-btn ${className} ${
                isLoading ? "loading" : null
            }`}
            onClick={onClick}
        >
            {!isLoading ? label : <LoadingIcon />}
        </button>
    );
}
