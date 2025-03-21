const utils = {
  formatTimestamp: (timestamp: any): string => {
    const date = new Date(timestamp).toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    return date;
  }
}

export default utils;