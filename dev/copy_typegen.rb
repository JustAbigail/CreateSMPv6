ENV.send :define_singleton_method, :method_missing, {|attr| self[attr.to_s]}

if not ENV.REPOSITORY_ROOT:
	puts "REPOSITORY_ROOT is not set, using default path"
	@REPO_ROOT = File.expand_path(File.join(File.dirname(__FILE__), '..'))

if not ENV.INSTANCE_ROOT:
	puts "INSTANCE_ROOT must be set"
	exit! 1

if not File.exist? "#{@REPO_ROOT}"