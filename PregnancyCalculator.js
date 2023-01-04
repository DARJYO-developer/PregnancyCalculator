import PregnancyCalculator from 'pregnancy-calculator';
import HealthInformation from 'health-information';

class PregnancyAssistantApp {
  constructor() {
    this.calculator = new PregnancyCalculator();
    this.healthInfo = new HealthInformation();
  }

  getDueDate(firstDayOfLastPeriod) {
    return this.calculator.calculateDueDate(firstDayOfLastPeriod);
  }

  getWeeklyUpdates(week) {
    return this.healthInfo.getWeeklyInfo(week);
  }
}
