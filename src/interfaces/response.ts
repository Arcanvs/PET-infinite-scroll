import Information from "./information";
import Result from "./result";

export default interface Response {
    info: Information;
    results: Result[];
}