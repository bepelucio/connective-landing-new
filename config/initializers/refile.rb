require "refile/s3"

if Rails.env.production?

	aws = {
	    access_key_id: ENV['aws_access_key'], 
	    secret_access_key: ENV['aws_secret_access_key'],
	    region: ENV['aws_s3_bucket_region'],
	    bucket: ENV['aws_s3_bucket_name']
	}

  	Refile.cache = Refile::S3.new(prefix: "cache", **aws)
	Refile.store = Refile::S3.new(prefix: "store", **aws)

end