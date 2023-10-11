import { HTMLAttributes } from 'react';

export default function InputError({ message, className = '', ...props }: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
    return message ? (
        <p {...props} className={'text-sm text-danger-600 ' + className}>
            {message}
        </p>
    ) : null;
}
