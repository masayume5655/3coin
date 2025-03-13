import React from 'react';

type CommandPrimitive = {
  // コンポーネントに必要なプロパティを定義
  // 例: 
  // value?: string;
  // onChange?: (value: string) => void;
};

interface CommandProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Command = React.forwardRef<HTMLDivElement, CommandProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={className}
        {...props}
      />
    );
  }
);
Command.displayName = 'Command';

export { Command };