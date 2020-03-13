import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

/*
// create an object at satisfies he 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');
// create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
*/

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.WinsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
