var jasmineEnv = jasmine.getEnv();
jasmineEnv.updateInterval = 1000;

jasmineEnv.addReporter(new jasmine.ConsoleReporter());
jasmineEnv.execute();