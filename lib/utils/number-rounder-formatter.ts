export const numberRounderFormatter =
  (
    value?: number
  ): number => {
    return (
      Math.round(
        (value as number) *
          100
      ) /
      100
    );
  };
