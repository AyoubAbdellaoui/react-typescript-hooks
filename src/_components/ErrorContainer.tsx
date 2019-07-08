import * as React from "react"
import { ErrorMessage } from "../_styles"


const ErrorMessageContainer: React.FC<{ errorMessage: string | null }> = ({
    errorMessage
}) => {
    return <ErrorMessage>{errorMessage}</ErrorMessage>
}

export default ErrorMessageContainer
