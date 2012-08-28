describe 'Example Jasmine Test Suite', ->

    it 'should pass', ->
        expect(1+2).toEqual(3)

    it 'should have jQuery loaded', ->
        expect($).toBeDefined()

    it 'should be on a supported domain', ->
        result = $.inArray(window.location.hostname, [
            'twitter.com'
            'mail.google.com'
            'linkedin.com'
            'facebook.com'
            'hootsuite.com'
        ])
        expect(result).toBeGreaterThan(-1)