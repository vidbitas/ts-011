const printResults = <FunctionArgs extends any[], FunctionReturnType>(
  fun: (...args: FunctionArgs) => FunctionReturnType,
  dataSamples: FunctionArgs[],
): void => {
  const result = dataSamples.reduce<{ [props: string]: FunctionReturnType }>((
    prevResult,
    dataSample,
  ) => ({
    ...prevResult,
    [`${fun.name ?? 'solution'}(${dataSample.join(', ')})`]: fun(...dataSample),
  }), {});

  console.table(result);
};

export = printResults;
